nodeGitflowPipeline {

    imageName = 'bih/bip-bih-test-root'

    //which docker registry will the resultant image be pushed to, in this case drawn for an ENV variable
    //dockerRegistry = "https://container-registry.dev.bip.va.gov"

    //which user/password key will the used to push the resultant image, in this case drawn for an ENV variable
    //credentials = "docker-registry"

    /*************************************************************************
    * Docker Build Image Tag Configuration
    *************************************************************************/
    //Note: The resulting image is always tagged with the branch name.

    //this map is used to tag the resulting image with this pattern branchToDeployEnvMap[env.BRANCH_NAME]['lower']
    //will be in the form of [env.BRANCH_NAME]['lower'] env value-commitHash pattern and this is not used in the cases of pull request images
    //in this example if the master branch has a build it will be tagged with sbx-commitHash
    //branchToDeployEnvMap = [
    //       'master': ['lower':['sbx']],
    //]

    //whether or not to use the ENV "BRANCH_NAME" in order to tag the image in absense of a valid branchToDeployEnvMap
    //will be in the form of branchName-commitHash pattern and this is not used in the cases of pull request images
    //useBranchNameTag = true/false

    /*************************************************************************
    * Build Configuration variables
    *************************************************************************/

    //command to run npm install
    install_script = "ci"

    //command to run npm build
    build_script = "build"

    //number of builds to keep in jenkins
    buildsToKeep = "5"

    //tests run in the jenkins pipeline
    test_script = "test-CI"

    //accessibility tests run in the jenkins pipeline
    accessibility_test_script = "test-a11y-CI"

    //option to disable accessibility tests
    skipAccessibilityTests = true

    /*************************************************************************
     * Fortify Configuration variables
     *************************************************************************/
    //Determines whether or not failing Fortify Quality Gates will cause pipeline failure.
    failOnGates = false

    //enable to skip the Fortify Security Scanning stage
    skipFortify = true

    //buildID used for Fortify buildID and file name parameters
    // fortifyBuildID = 'bip-bih-test-root'

    //enable to archive Fortify translate and scan log files
    archiveFortifyLogs = false

    //List of files to include in Fortify translate. Value must be in the following syntax: '"./**/*.java" "./**/*.xml"'
    fortifyIncludeList = '"./**/*.js" "./**/*.jsx"'

    //List of files to exclude from Fortify translate. Value must be in the following syntax: '"./dir1" "./dir2"
    //fortifyExcludeList = '"./Dockerfile" "Dockerfile.local"'

    /*************************************************************************
    * Not yet implemented Configuration variables (These items can be requested and implementation effort can then begin)
    *************************************************************************/

    //which node image to use in the pipeline
    //node_image = "node:lts"

    //whether or not to include node modules in the stash from build stage to the deploy stage
    //stash_node_modules = true

    //directory of artifacts which should be archived and attached to this build
    //build_artifacts = "dist/**"

    //what version is your application on - this can be an additional tag to your docker image
    //version = "0.0.1"

    //Testing and skipping section
    //skipTests = true
    //skipPrismaCloud = false
    //safePrismaCloudScan = true
    //skipSelenium = true
    //skip508Tests = true

    /*************************************************************************
    * Tech Docs Build Configuration
    *************************************************************************/

    // enabled publishing tech docs to s3
    
    publishTechDocsToS3 = true
    

    s3TechDocsBucketName = "default/component/bip-bih-test-root"
    s3TechDocsEntity = "bip-dev-bih-tech-docs-bucket"
}