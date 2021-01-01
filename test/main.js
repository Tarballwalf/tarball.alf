var link = document.createElement('meta');
link.setAttribute('property', 'og:url');
link.content = document.title;
document.getElementsByTagName('head')[0].appendChild(link);