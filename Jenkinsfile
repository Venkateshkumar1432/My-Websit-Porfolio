pipeline {
    agent any

    environment {
        DEPLOY_PATH = '/var/www/html'
    }

    stages {
        stage('Clean Workspace') {
            steps {
                echo '🧹 Cleaning previous build workspace...'
                deleteDir()
            }
        }

        stage('Checkout') {
            steps {
                echo '🔹 Checking out source code from SCM...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                echo '🏗️ Building production-ready React app...'
                sh 'npm run build'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                echo '🚀 Deploying build to /var/www/html...'
                sh '''
                    sudo rm -rf /var/www/html/*
                    sudo cp -r build/* /var/www/html/
                    sudo chown -R www-data:www-data /var/www/html
                    sudo systemctl reload nginx
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
            cleanWs()
        }
        failure {
            echo '❌ Deployment failed. Please check logs.'
            cleanWs()
        }
    }
}
