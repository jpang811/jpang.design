#!/bin/sh

echo "cleaning up public folder"
rm -rf ./public/*

echo "copying files to public folder"
cp index.html ./public/index.html
cp about.html ./public/about.html
cp contact.html ./public/contact.html
cp travel.html ./public/travel.html
cp travelblog.html ./public/travelblog.html
cp sitemap.html ./public/sitemap.html
cp ciid.html ./public/ciid.html
cp api-dx.html ./public/api-dx.html
cp onboarding.html ./public/onboarding.html
cp servicedesign-workshop.html ./public/servicedesign-workshop.html
cp portfolio.html ./public/portfolio.html
cp LICENSE ./public/LICENSE
cp -r less ./public/less
cp -r fonts ./public/fonts
cp -r css ./public/css
cp -r js ./public/js
cp -r img ./public/img
cp -r vendor ./public/vendor
cp -r travelmoments ./public/travelmoments

echo "deploying to firebase"
firebase deploy --only hosting
