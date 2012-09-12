heroku-cors-proxy
=================

Quick, easy and dirty way to proxy a non-cors api through a cors heroku app

	heroku create
	git push heroku master
	heroku config:add TARGET=http://my-non-cors-host.com
