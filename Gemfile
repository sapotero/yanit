source 'http://rubygems.org'

gem 'rails', '3.1.1'

# Bundle edge Rails instead:
# gem 'rails',     :git => 'git://github.com/rails/rails.git'

gem 'sqlite3'

#gem 'netzke-core'
#gem 'netzke-basepack'
#gem 'netzke-communitypack'

gem 'netzke-core',        :path => File.expand_path('../vendor/gems/netzke-core', __FILE__)
gem 'netzke-basepack',        :path => File.expand_path('../vendor/gems/netzke-basepack', __FILE__)
gem 'netzke-communitypack', :path => File.expand_path('../vendor/gems/netzke-communitypack', __FILE__)


gem 'forgery'
gem 'faker'

gem 'pg'

# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails', "  ~> 3.1.0"
  gem 'coffee-rails', "~> 3.1.0"
  gem 'uglifier'
end

# Use unicorn as the web server
# gem 'unicorn'

# Deploy with Capistrano
# gem 'capistrano'

# To use debugger
# gem 'ruby-debug19', :require => 'ruby-debug'

group :test do
  # Pretty printed test output
  gem 'turn', :require => false
end
