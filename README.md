# JSON-to-HTML-Converter, 

### In this Version It Can convert only unique html elements

## How To use

```html
var data_input =
        {
            "p": {
                "id": "text",
                "class": "form",
                "style": "background: orange; border: 1px solid black;padding:5px",
                "html": "My First Json p tag"
            },
            "div": {
                "id": "text",
                "class": "form",
                "style": "background: white; border: 1px solid black;padding:5px",
                "html": "My First Json div tag",
                "_child": {
                    "br": {

                    },
                    "hr": {

                    },
                    "span": {
                        "id": "bold",
                        "html": "My Name is span and iam inside Div Tag ",
                        "style": " border: 1px solid black"
                    }
                }
            },
            "span": {
                "id": "text",
                "class": "form",
                "html": "My First Json h2 tag",
                "style": "background: green; border: 1px solid black;padding:5px",
                "_child": {
                    "b": {
                        "id": "bold",
                        "html": " Keep Me Bold ",
                        "style": "background: blue; color: white; border: 1px solid black",
                    }
                }
            }
        };

data_input = JSON.stringify(data_input);
console.log(data_input);
json2Html('mypage').setJson(data_input);

json2Html('mypage').getHtml(function (a) {
    document.write(a.outerHTML);
    console.log(a.outerHTML);

});

```

