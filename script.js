{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset178 GeezaPro;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh9000\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("contactForm").addEventListener("submit", function(event) \{\
  event.preventDefault(); // Prevent default form submission\
  \
  // Get form values\
  var name = document.getElementById("name").value;\
  var email = document.getElementById("email").value;\
  var message = document.getElementById("message").value;\
\
  // Display submission response\
  var responseElement = document.getElementById("response");\
  responseElement.innerHTML = `<p>Thank you, $\{name\}! Your message has been received.</p>`;\
  \
  // Clear form fields\
  document.getElementById("name").value = "";\
  document.getElementById("email").value = "";\
  document.getElementById("message").value = "";\
\});}