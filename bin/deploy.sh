#!/bin/bash

# Replace these variables with your actual values
EC2_HOST="18.143.140.187"
EC2_USER="ec2-user"
REMOTE_DIR="/var/www/html/portfolio"

# Local path to your Vue 3 dist folder
LOCAL_DIST_PATH="./dist"

# SSH key file (optional, only if you use key-based authentication)
SSH_KEY_FILE="path/to/your/private-key.pem"

# SSH command
SSH_CMD="ssh -i $SSH_KEY_FILE $EC2_USER@$EC2_HOST"

# Transfer Vue 3 dist folder to the EC2 instance using SCP
scp -i $SSH_KEY_FILE -r $LOCAL_DIST_PATH $EC2_USER@$EC2_HOST:$REMOTE_DIR

# Connect to the EC2 instance and deploy the files
$SSH_CMD << EOF
  cd $REMOTE_DIR
  # Add any additional deployment steps here if needed
  # For example, you might want to backup existing files before deploying

  # Remove existing files in the destination directory
  rm -rf *

  # Copy the new files from the dist folder
  cp -r $LOCAL_DIST_PATH/* .

  # Additional deployment steps if needed

  # Restart your web server (e.g., Nginx or Apache)
  # For example, if using Nginx:
  sudo service nginx restart
EOF

echo "Deployment completed!"
