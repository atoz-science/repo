# Configure the AWS Provider
provider "aws" {
  region                   = "eu-central-1"
  shared_config_files      = ["C:\\Users\\GLB\\.aws\\config"]
  shared_credentials_files = ["C:\\Users\\GLB\\.aws\\credentials"]
  profile                  = "terraform-user"
}
