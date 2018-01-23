pipeline {
    agent any
    tools {
      // Change name based on installer in Jenkins
      nodejs 'nodejs'
    }
    stages {
        stage('Prepare Stage') {
            steps {
              echo 'Prepare Stage: Cleaning up workspace and pulling resources'
              deleteDir()
              checkout scm
              sh 'npm install'
            }
        }
        stage('Build') {
          steps {
            echo 'Build: Calling npm build script'
            sh 'npm build'
          }
        }
        stage('Testing') {
          steps {
            echo 'Testing: Running npm test script'
            sh 'npm test'
          }
        }
        stage('Deploy') {
          steps {
            echo 'Deploy: Running process to deploy the Client application'
            // Insert here the steps for deploy
          }
        }
    }
}
