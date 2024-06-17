start:
	pm2 start yarn --name react-goiania-bff -- run start

update:
	git pull
	yarn start
	pm2 restart react-goiania-bff
