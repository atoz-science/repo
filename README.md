This is infrastructure code on AWS with Terrafrom where i have implemented infrastructure for ECR and ECS along with other resources.
1- I configured AWS IAM user on my local machine with Access Key, Secret Access Key, and eu-central-1 AWS region. This user has Administrator Access policy attached.
2- I used Microsoft VS Code desktop application for Terraform Infrastructre Code. Harshi Corp Language (HCL) has been used for infrastructure development.
3- main.tf file: this file consists on 
 - terraform block
 - tf-state block
 - backend block for s3
 - ECR repository block
 - Module block for the ECS 
 
4- providers.tf file: it has AWS provider block.
5- There is a module for terraform remote state which will has S3 and Dynamodb services for state locking.
6- tf-state.tf file: it has resource blocks for s3 bucket with versioning and sever side encryption and a dynamodb table.
7- variables.tf file: it has the varable definitions for the resources like s3 bucket name and table name.   
8- locals.tf file: it has the variables and values for the resources
 - s3 bucket name
 - dynamodb table name
 - variable and the value of ecr repository name
 - values and variables for the esc module
9- ECR Folder: it has
 - ecr.tf file: it has resource block for ecr repository.
 - variables.tf file: it has variable definition
 - output.tf file: it has output block for repository url which will be send to ECS module as a variable 
10- App Folder: this folder consis on
 - src folder
  - server.js file: it is a just simple nodeJs application which we can access the conatcts list n port 3000
  - package.json file: it has the dependency for express. 
  - test the app in src folder: 
   - install the npm "npm install" 
   - then start the nodejs server "node server.js" 
   - now jump to the local machine terminal and write the command command "curl http://localhost:3000/contacts"
C:\Users\ABC\Terraform\App\src>curl http://localhost:3000/contacts
{"contacts":[{"name":"Ali","email":"aali1@gmail.com","cell":"+92303-123-4567"},{"name":"Noman","email":"noman1@gmail.com","cell":"+92302-453-3434"},{"name":"Hurairah","email":"hurairahj@gmail.com","cell":"+92309-786-9090"}]}  
 - Dockerfile: it has the base image for Alpine and run the npm to install dependencies.
11- ECS Folder: this folder consists on
- ecs.tf file: this file includes the
 - ecs resource block
 - default vpc block: in vpc the cluster has been deployed.
 - resource bloks for three subnets named subnet_a, subnet_b and subnet_c.
 - resource bock for esc task definition
 - IAM resource role block
 - IAM role policy block
 - A resource for Application Load Balancer (ALB): setting up the subnets equal to the default subnets.
 - A security group block for ALB. It has ingress on port 80 and wide open egress.
 - A resource for Load Balancer atrget group
 - A block for Load Balancer listener
 - A resource block for esc service, load balancer, and netwrok configuration for the service in subnets.
 - A security group for ecs. Setting up the ingress property to the load balancer security group and egress wide open. 
- data.tf file: it has the data block for IAM policy.
- variables.tf file: it has the varibales declaration for the esc module. 
