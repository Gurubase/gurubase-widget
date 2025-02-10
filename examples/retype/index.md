# Pagy

The ultimate pagination gem

---

## Overview

Pagy is the fastest and most flexible pagination gem. It outperforms the others in each and every benchmark and comparison.

### Key Features

- ⚡️ **Fast**: 40x faster than other pagination gems
- 🪶 **Lightweight**: 300 lines of code and no dependencies
- 🔌 **Framework Agnostic**: Works with any Ruby framework
- 🛠 **Customizable**: Fully customizable through simple Ruby code

### Quick Start

Add to your Gemfile:

```ruby
gem "pagy"
```

Include in your code:

```ruby
include Pagy::Backend  # in a controller
include Pagy::Frontend # in a view or helper
```

Use in your controller:

```ruby
def index
  @pagy, @records = pagy(Product.all)
end
```

Use in your view:

```erb
<%== pagy_nav(@pagy) %>
```

### Why Pagy?

- **Better Performance**: Pagy is incredibly fast and light
- **Framework Agnostic**: Works with any Ruby framework
- **No Dependencies**: Zero dependencies, just pure Ruby code
- **Fully Customizable**: Easy to customize through simple Ruby code
- **Better Memory Usage**: Uses a fraction of the memory of other gems

### Documentation Structure

This documentation is organized into several sections:

- **Getting Started**: Prerequisites and basic setup
- **API**: Core API documentation and usage
- **Extras**: Additional features and integrations
- **Guides**: Migration and troubleshooting guides

### Support

Need help? Check out our [troubleshooting guide](troubleshooting.md) or open an issue on [GitHub](https://github.com/ddnexus/pagy). 