# Core API

The Pagy core API provides the fundamental pagination functionality.

## Pagy::DEFAULT

Global defaults that can be overridden:

```ruby
Pagy::DEFAULT.merge!(
  items: 20,          # items per page
  size: [1,4,4,1],    # nav bar sizes
  page_param: :page,  # parameter name for page number
  items_param: :items # parameter name for items per page
)
```

## Pagy Class

### Instance Methods

#### initialize(count, page: 1, items: 20, ...)

Creates a new Pagy object:

```ruby
pagy = Pagy.new(100, page: 2)  # 100 items, page 2
```

Parameters:
- `count`: Total number of items
- `page`: Current page number (default: 1)
- `items`: Items per page (default: 20)

#### prev
Returns the previous page number or nil:

```ruby
pagy.prev    # => nil (on page 1)
pagy.prev    # => 1 (on page 2)
```

#### next
Returns the next page number or nil:

```ruby
pagy.next    # => 2 (on page 1)
pagy.next    # => nil (on last page)
```

#### series
Returns the series array for navigation:

```ruby
pagy.series  # => [1, 2, "gap", 5, 6, 7, 8, "gap", 50]
```

## Variables

### Read-Only Variables

```ruby
pagy.count   # => total count of items
pagy.page    # => current page number
pagy.items   # => items per page
pagy.pages   # => total number of pages
pagy.last    # => last page number (equal to pages)
pagy.from    # => first item number in current page
pagy.to      # => last item number in current page
pagy.vars    # => variables hash
```

## Error Handling

### Pagy::OverflowError

Raised when requesting a page beyond the last page:

```ruby
begin
  @pagy, @records = pagy(Product.all, page: 999999)
rescue Pagy::OverflowError
  # Handle the error (e.g., redirect to last page)
  redirect_to products_path(page: @pagy.last)
end
```

## Best Practices

1. **Cache the Count**
```ruby
# Bad
@pagy, @records = pagy(Product.all)

# Good
@pagy, @records = pagy(Product.all, count: Rails.cache.fetch("products-count") { Product.count })
```

2. **Handle Overflow**
```ruby
# In application_controller.rb
include Pagy::Backend

rescue_from Pagy::OverflowError, with: :redirect_to_last_page

private

def redirect_to_last_page(exception)
  redirect_to url_for(page: exception.pagy.last), notice: "Page #{params[:page]} is out of bounds"
end
```

3. **Use Items Extras for Dynamic Items Per Page**
```ruby
# Enable the items extra
require "pagy/extras/items"

# In controller
@pagy, @records = pagy(Product.all, items: params[:items])
``` 