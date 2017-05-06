# JSON-to-HTML-Converter, 

### In this Version It Can convert any Html elements, as it was a limitation in previous version, And also a slight change in Json Format.

## Syntax

```html

[
   {
      "tag":"tag_name",
      "html":"Text To put inside Elements"
      "_child":[
         {
            "tag":"child_tag_name",
            "html":"Html text of Child Element",
            "_child"[{...//And it is Recursive}]
         }
        ]
   }
]

```

## How To use

```html

var data_input = [
   {
      "tag":"h3",
      "id":"table-head",
      "class":"table-head",
      "html":"Top 3 Coders in India"
   },
   {
      "tag":"table",
      "id":"sample-table",
      "class":"table-class",
      "border":"1",
      "_child":[
         {
            "tag":"tr",
            "_child":[
                {
                   "tag":"th",
                   "html":"Rank"
                },
                {
                   "tag":"th",
                   "html":"Full Name"
                },
                {
                   "tag":"th",
                   "html":"City"
                }
            ]
         },
         {
            "tag":"tr",
            "_child":[
                {
                   "tag":"td",
                   "html":"1"
                },
                {
                   "tag":"td",
                   "html":"Vinod Selvin"
                },
                {
                   "tag":"td",
                   "html":"Mumbai"
                }
            ]
         },
         {
            "tag":"tr",
            "_child":[
                {
                   "tag":"td",
                   "html":"2"
                },
                {
                   "tag":"td",
                   "html":"Manoj Selvin"
                },
                {
                   "tag":"td",
                   "html":"Bangalore"
                }
            ]
         },
         {
            "tag":"tr",
            "_child":[
                {
                   "tag":"td",
                   "html":"3"
                },
                {
                   "tag":"td",
                   "html":"Binson Selvin"
                },
                {
                   "tag":"td",
                   "html":"Tirunelveli"
                }
            ]
         },
      ]
   }
];

```

### Expected Datatype is String i.e. "Json String", To Convert to Json String use below code.

```html

data_input = JSON.stringify(data_input);

```

### How To Set Json String

```html

json2Html('mypage').setJson(data_input);

```
### How To Get converted Html

```html

json2Html('mypage').getHtml(function (html) {
    document.write(html);
});

```

### Output as Expected

```html

<h3 id="table-head" class="table-head">Top 3 Coders in India</h3>
<table id="sample-table" class="table-class" border="1">
   <tbody>
      <tr>
         <th>Rank</th>
         <th>Full Name</th>
         <th>City</th>
      </tr>
      <tr>
         <td>1</td>
         <td>Vinod Selvin</td>
         <td>Mumbai</td>
      </tr>
      <tr>
         <td>2</td>
         <td>Manoj Selvin</td>
         <td>Bangalore</td>
      </tr>
      <tr>
         <td>3</td>
         <td>Binson Selvin</td>
         <td>Tirunelveli</td>
      </tr>
   </tbody>
</table>

```

