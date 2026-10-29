---
title: Pseudo Styles for Button Blocks
slug: pseudo-styles-for-button-blocks
tags: [theme builder, site admin]
---

Theme designers and developers can now style button states (hover, focus, active, and focus visible) directly within the theme.json, making it much easier to keep all design controls centralized and consistent. This reduces the reliance on custom CSS for things like button hover states ([71418](https://github.com/WordPress/gutenberg/pull/71418)).

JSON{
    "styles": {
        "blocks":{
                "core/button":{
                    "color":{
                        "background":"blue"
                    },
                    ":hover":{
                        "color":{
                        "background":"green"
                        }
                    },
                    ":focus":{
                        "color":{
                        "background":"purple"
                        }
                    }
                }
            }
    }
}

```
{
    "styles": {
        "blocks":{
                "core/button":{
                    "color":{
                        "background":"blue"
                    },
                    ":hover":{
                        "color":{
                        "background":"green"
                        }
                    },
                    ":focus":{
                        "color":{
                        "background":"purple"
                        }
                    }
                }
            }
    }
}
```

More details are available in the Dev Note: [Pseudo-element support for blocks and their variations in theme.json](https://make.wordpress.org/core/2026/03/09/pseudo-element-support-for-blocks-and-their-variations-in-theme-json/).
