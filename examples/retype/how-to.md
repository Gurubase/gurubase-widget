# How To Use Pagy

This guide will walk you through the basic usage of Pagy in your application.

## Basic Setup

### 1. Install the Gem

Add Pagy to your Gemfile:

```ruby
gem "pagy"
```

Then install it:

```bash
bundle install
```

### 2. Include the Modules

In your controller:

```ruby
include Pagy::Backend

class ProductsController < ApplicationController
  def index
    @pagy, @records = pagy(Product.all)
  end
end
```

In your view helper or view:

```ruby
include Pagy::Frontend
```

## Basic Usage

### Controller

```ruby
# Return 20 records (default)
@pagy, @records = pagy(Product.all)

# Return 30 records per page
@pagy, @records = pagy(Product.all, items: 30)

# Start from page 2
@pagy, @records = pagy(Product.all, page: 2)
```

### View

Basic navigation:
```erb
<%== pagy_nav(@pagy) %>
```

Bootstrap navigation:
```erb
<%== pagy_bootstrap_nav(@pagy) %>
```

Responsive navigation:
```erb
<%== pagy_nav_responsive(@pagy) %>
```

## Advanced Usage

### Custom Items Per Page

```ruby
# Controller
def index
  @pagy, @records = pagy(Product.all, items: 15)
end
```

### Multiple Collections

```ruby
# Controller
def dashboard
  @pagy_products, @products = pagy(Product.all, page_param: :page_products)
  @pagy_users, @users = pagy(User.all, page_param: :page_users)
end
```

### Search and Filter

```ruby
def index
  scope = Product.all
  scope = scope.where("name LIKE ?", "%#{params[:search]}%") if params[:search].present?
  @pagy, @records = pagy(scope)
end
```

## Configuration

### Global Configuration

Create an initializer (e.g., `config/initializers/pagy.rb`):

```ruby
require "pagy/extras/bootstrap"  # for bootstrap nav
require "pagy/extras/responsive" # for responsive nav

Pagy::DEFAULT[:items] = 15      # items per page
Pagy::DEFAULT[:size]  = [1,4,4,1] # nav bar sizes
```

## Next Steps

- Check out the [Core API](api/core.md) documentation
- Explore [Extras](extras/items.md) for additional features
- Read the [Migration Guide](migration-guide.md) if upgrading 