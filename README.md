# Boy Walks Dog (boywalksdog.com)
---
### React without `create-react-app`
I wanted to make a complete solo project from conception to deployment doing all parts myself (and without all of the magic). After graduating from bootcamp, I picked up dog walking while I applied to junior developer positions. It made sense to to make a React image gallery project highlighting some of the pups I've had the privilege to walk. I didn't want to use `create-react-app`, though. I wanted to have a better grasp of what **Webpack** does.  

### Getting it on the web with AWS

After getting an MVP (minimal viable product) working on my localhost, I wanted to learn how to make it globally accessible. This gave me the opportunity to finally interact with **Amazon Web Services**. It started with **S3** (Simple Storage Service) and it's ability to host a static webpage. However, I wanted to get my project working on HTTPS. This required adding **Route 53** to handle the DNS, **Cloudfront** for the CDN, and **Amazon Certificate Manager** to get the SSL certificates for both my naked domain and www redirect.

### Up Next

Now that I have a minimal viable project working online, I'd like to go back and improve my React code as well as the CSS. A few of the things I'd like to work on are:
  * Floating Title Bar with shrinking on scroll
  * True image optimization with minimal quality loss
  * Better center alignment for overlay images
  * Exit the overlay with a click anywhere outside of the image
  * Dog name overlay on image hover
  * Description of dog alongside overlay image
  * Image carousel of individual dog's different images in overlay
  * Media Queries to create a better experience on mobile
  * ...and much more!
