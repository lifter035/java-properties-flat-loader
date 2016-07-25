### Quick start

This loader enables to require Java .properties files to your webpack-driven application. Keys are nested using java properties namespaces. Values can contain the variables in form of ${a}.
This is forked from io-german/java-properties-flat-loader and just added options for properties module.

Example:

messages_en.properties

```java
label.landing.title = Hello!
```

Consider this code:

```javascript
var messages = require(./messages_en.properties);
console.log('Title message is "' + messages['label.landing.title'] + '"');
```

It will result with this log message:

```
Title message is "Hello!"
```

### Version history

#### 1.0.0

* Added almost complete support of *.properties* file format (thanks to the [properties](https://www.npmjs.com/package/properties) module)

#### 0.1.1

* Added this document
