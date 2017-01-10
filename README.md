# LITTLE PHARMACEUTICALS

Hosted at [lilpharma.surge.sh](http://lilpharma.surge.sh)

This is a simple, single page react.js application implemented with Bazaarvoice Conversations. 

The biggest challenge for me were some of the generally tricky aspects of react - calling the $BV.ui and injecting content within the component lifecycle. Inserting javascript into the .jsx it uses is also an adventure in syntax.

Trying to set up SEO doesn't seem possible, as the html page never changes and there is no server.

One of the weird (unadvisable) things I did was to make a container component instead of a container page. It seems to have full functionality, but I'm not entirely sure that it can't be broken.

Let me know if you see something that doesn't work, or should work better!