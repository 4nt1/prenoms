lock '3.4.0'
set :application, 'prenoms'
set :repo_url, 'git@github.com:4nt1/prenoms.git'
set :deploy_to, '/home/deploy/prenoms'
set :pm2_config, 'config/pm2.json'
set :linked_dirs, %w(
  node_modules
)

after 'deploy:published', :truc do
  invoke 'pm2:restart'
end