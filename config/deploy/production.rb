set :stage, :production
server 'varanasi.antoinemary.me', user: 'deploy', roles: %w{app web}
set :branch, "master"