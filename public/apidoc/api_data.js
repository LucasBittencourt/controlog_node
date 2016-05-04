define({ "api": [
  {
    "type": "POST",
    "url": "/v1/clients/:clientId/log/add",
    "title": "Insere um novo log.",
    "version": "1.0.0",
    "group": "Log",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token.</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>Application/json</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Client",
            "description": "<p>ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "Log",
            "description": "<p>object.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "    endpoint: http://controlog-node.herokuapp.com/v1/clients/570d870f5596d00300c7b1c5/log/add\n\n    body:\n    {\n    \t\"date_time\": \"2015-12-07 15:23:42\",\n\t    \"message\": \"Description of log\",\n\t    \"application\": {\n\t\t     \"code\": \"1\"\n\t     },\n   \t\"type_log\": {\n\t\t     \"code\": \"1\"\n   \t}\n   }",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Insert",
            "description": "<p>log</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 201 OK\n{\n \"__v\": 0,\n \"_id\": \"572a7c409afbb5e803ee8984\",\n \"date_time\": \"2015-12-07T15:23:42.000Z\",\n \"message\": \"Description of log\",\n \"application\": {\n    \t\"_id\": \"570d870f5596d00300c7b1c5\",\n      \"name\": \"Name from Application \",\n      \"code\": \"1\"\n  },\n  \"type_log\": {\n  \t\"_id\": \"570ec89db285c703004f2cbf\",\n  \t\"name\": \"Name from type log\",\n  \t\"code\": \"1\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./controlog/router.js",
    "groupTitle": "Log",
    "name": "PostV1ClientsClientidLogAdd"
  }
] });
