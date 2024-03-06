#!/bin/bash

tempFilename=.env_vars
outputDestinationDefault="."
outputDestination=""

rm -rf $tempFilename

# Determine output destination
if [ -z "$1" ]; then
    outputDestination=$outputDestinationDefault
else
    outputDestination=$1
fi

outputFilename="$outputDestination/import-map.json"
rm -rf $outputFilename

# Write second argument entries to a temp file
# If no second argument provided, use system environment
if [ -z "$2" ]; then
    env >> $tempFilename
else
    cat $2 >> $tempFilename
fi

# Look for any line in the temp file that starts with our search string
variables=($(cat $tempFilename | grep ^APP_IMPORT_MAP | sort))

# Write out entries to import map file
echo $'{\n\t"imports": {' >> $outputFilename

length=${#variables[@]}

# Loop through the array
for ((i=0; i<$length; i++)); do
    # Access the current variable
    variable=${variables[$i]}

    # Split on the =
    entry=${variable#*=}

    # Split on the :
    key="${entry%%:*}"
    value="${entry#*:}"

    mapEntry="\"$key\": \"$value\""

    # Check if it's the last variable
    # Only add comma if it's not the last
    if [ $i -ne $(($length - 1)) ]; then
        mapEntry="$mapEntry,"
    fi

    echo $'\t\t' "$mapEntry" >> $outputFilename
done

echo $'\t}\n}' >> $outputFilename

rm -rf $tempFilename