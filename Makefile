

npm_install:
	cd front; npm install


dev_front: npm_install
	cd front;npm run dev

front: npm_install
	cd front; npm run build; cd ..
