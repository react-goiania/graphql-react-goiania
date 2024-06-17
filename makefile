start:
	pm2 start yarn --name pubify-bff -- run start

update:
	git pull
	yarn start
	pm2 restart pubify-bff
