const brands = [
	{
		name: "Nike",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/1200px-Logo_NIKE.svg_-600x216.png?media=1644168245",
	},
	{
		name: "Adidas",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/1200px-Adidas_Logo.svg_-600x406.png?media=1644168245",
	},
	{
		name: "Fila",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/Fila_logo.svg_-600x206.png?media=1644168245",
	},
	{
		name: "Puma",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/1200px-Puma_AG.svg_-600x298.png?media=1644168245",
	},
	{
		name: "Under Armour",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/1200px-Under_armour_logo.svg_-515x300.png?media=1644168245",
	},
	{
		name: "New Balance",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/New_Balance_logo.svg_-600x330.png?media=1644168245",
	},
	{
		name: "Asics",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/Asics_Logo.svg_-600x211.png?media=1644168245",
	},
	{
		name: "Reebok",
		image:
			"https://usercontent.one/wp/www.alltopeverything.com/wp-content/uploads/2020/04/Reebok_logo19-600x303.png?media=1644168245",
	},
];

const categories = [
	"Shoes",
	"Hoodies/Sweatshirts",
	"Tops/T-Shirts",
	"Tights/Trousers",
	"Shorts",
	"Kits",
	"Matching Sets",
];

const products = [
	{
		id: 0,
		title: "NIKE SPORTSWEAR CLUB FLEECE",
		price: 99.99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f6ab0c05-93ab-4d47-8739-9dd7d7d030cf/sportswear-jersey-crew-MtHpfn.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6ab79544-8b10-4b91-b8d3-e8eb7450db7d/sportswear-jersey-crew-MtHpfn.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/baea8387-ed66-4bfc-8e94-823111b81ba9/sportswear-jersey-crew-MtHpfn.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/da337978-f582-4423-9803-f6190d6c7641/sportswear-jersey-crew-MtHpfn.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/158c8952-9017-4698-bd2c-824bf3538601/sportswear-jersey-crew-MtHpfn.png",
		],
	},
	{
		id: 1,
		title: "AIR MAX PLUS",
		subtitle: "Basketball Shoes",
		price: 99.99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/297b3c8e-fd70-48c6-af2e-578351df75de/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e3d45b7c-d5f8-4751-96b1-80ab424b2bbf/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/62229f05-ac81-41ba-8bf1-d96ff42f3e46/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/24d9468f-b59e-4e14-a518-4238c5b4282b/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2dfd73b3-3ed3-4bf4-8d31-9c98046adb4a/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ff95c4e2-a233-4673-a810-d3a0ae28c3dc/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/11e39ed2-982e-427f-b80d-56e56ddefe77/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3c3749a7-6415-45cc-a9e4-44555df3931f/air-max-plus-shoes-NhxrQd.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0a38d841-873a-4779-85d5-f7c1203a6dc4/air-max-plus-shoes-NhxrQd.png",
		],
	},
	{
		id: 2,
		title: "LeBron 19",
		subtitle: "Basketball Shoes",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/465ab10b-d24f-4d78-98eb-f94db71fbdbd/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/58ae40db-4bab-441a-ba47-0c1ac4755654/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/44fe1799-8971-47ef-a84f-e58772a04143/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dc77afc3-ec74-45cb-8757-9c68276d5773/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c13adec0-4806-4540-b499-66952d851ad7/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5282e019-cbfa-450a-9803-ad288ec50f90/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b344d7be-7168-4237-a027-b4b1a954368d/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ed48e13b-f366-4186-975b-abe7ddb4010c/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7a6c8633-4d8b-43d0-8654-5cb71aae4217/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84bc5869-0ea1-41b7-9f38-d92bc980a0a7/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e0fd539c-2df1-4c7a-ad1b-87b5e7805b5c/lebron-19-basketball-shoes-Tshbtg.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0fb22d94-134f-4b91-b3c4-cb8c21d68678/lebron-19-basketball-shoes-Tshbtg.png",
		],
	},
	{
		id: 3,
		title: "Jordan Zoom Separate",
		subtitle: "Basketball Shoes",
		price: 105.99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da4e8baf-ffe9-456c-96e8-764d2fcc41de/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ac61c2f4-33af-4fe1-b931-857d40eb170f/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4ebd17fa-9102-41a6-8771-0fe5a4aa27cf/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1a3bd7d5-16fb-4612-b60a-0a602a33844d/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4805ed56-6a87-4d4b-9115-02bb9e83e767/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/52a54b82-0f42-4c49-b140-83ef44cce7c4/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/adaa9096-4273-4610-a617-5d480d1eba3a/jordan-zoom-separate-basketball-shoes-WbB4xC.png",
			'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/693fcd88-ed4e-466a-b384-ddfc631ca26b/jordan-zoom-separate-basketball-shoes-WbB4xC.png"',
		],
	},
	{
		id: 4,
		title: "Kyrie Infinity",
		subtitle: "Basketball Shoes",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/757aaf4c-2ce3-4640-93d3-4cf0d2d115a5/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/0ec2af0c-387d-4523-9ab8-341f0af4422d/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8841975c-0897-4c7f-9459-b60b6a7f5152/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2b503b22-ebbc-40c1-a8a1-9a9993b0dd71/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/90888717-22f8-40ec-9a75-4eadd3748d27/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8d95893c-d096-4c8b-b91a-9214bfef1e2a/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5a4f3265-a739-428f-8dbe-0253d146b774/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/875d8799-bb78-4215-9c26-aefd8e3eb662/kyrie-infinity-basketball-shoes-MKdt51.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b643c50e-73d0-4f7f-a064-63ba9d9fc13b/kyrie-infinity-basketball-shoes-MKdt51.png",
		],
	},
	{
		id: 5,
		title: "CHELSEA",
		subtitle: "Men's Football Shirt",
		description:
			"Like other shirts from our Stadium collection, the Chelsea F.C. Football Shirt pairs replica design details with sweat-wicking fabric to give you a game-ready look inspired by your favourite team.This product is made from 100% recycled polyester fibres.",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b62dbf5d-11ee-4c63-995f-c80630157cd4/chelsea-fc-2021-22-stadium-home-football-shirt-410Z26.png",
			"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/97d937db-98ee-4e7a-8e07-580e183e57cb/chelsea-fc-2021-22-stadium-home-football-shirt-410Z26.png",
			"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/2ca5d7eb-a205-4400-91ff-96dc29437bcd/chelsea-fc-2021-22-stadium-home-football-shirt-410Z26.png",
		],
	},
	{
		id: 6,
		title: "CLUB AMERICA",
		subtitle: "Men's Football Shirt",
		description:
			"Like other shirts from our Stadium collection, the Chelsea F.C. Football Shirt pairs replica design details with sweat-wicking fabric to give you a game-ready look inspired by your favourite team.This product is made from 100% recycled polyester fibres.",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/aec9a9de-1209-4ed0-b249-3e475740173e/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/f55a9ab1-3e91-41b7-a13a-4f5bfb4a1173/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2b333c63-0ad6-45f8-82bc-2e275668269c/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6562cd42-9c33-4c39-afb8-59e32a8a1853/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/585173c4-1757-4505-9a3c-0c33be3c9716/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5f1a8f85-d3d9-4876-8f70-29be0325a887/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/595011ca-61e5-4642-99a3-19f051f3df44/club-america-2021-22-stadium-home-football-shirt-1cxF06.png",
		],
	},
	{
		id: 7,
		title: "Men's Fleece Pullover Hoodie",
		subtitle: "Nike Sportswear",
		description:
			"What's better than your favourite cosy hoodie? A cosy hoodie with a 3D schematic of our iconic logo, of course. Up close it has all the detail, but from far away it gives a blurred effect.",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4ca2d4a2-7c77-4bc3-845f-e5d2222e7c41/sportswear-fleece-pullover-hoodie-XbTtVK.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/97749940-ef9c-4f31-8fe9-72ca6cb4f4b7/sportswear-fleece-pullover-hoodie-XbTtVK.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/120b0433-ee9e-4c7b-aa98-7ec0df37f9bd/sportswear-fleece-pullover-hoodie-XbTtVK.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/701c0867-3f39-48be-bb3e-9912fdff82f8/sportswear-fleece-pullover-hoodie-XbTtVK.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ec088410-7aec-41ef-b560-308287b66185/sportswear-fleece-pullover-hoodie-XbTtVK.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/087b07b8-4d75-4c3a-955a-6d355a8c3416/sportswear-fleece-pullover-hoodie-XbTtVK.png",
		],
	},
	{
		id: 8,
		title: "LeBron",
		subtitle: "Men's Pullover Hoodie",
		description:
			"Step into LeBron's world in the LeBron Hoodie, featuring a new version of LeBron's crowned lion logo as the emblem on a flag.Heavyweight fleece and a loose fit make this your go-to layering piece for the wintry months.",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/029bf9b3-7ee9-4f00-a0a3-febb788786ba/lebron-pullover-hoodie-KNcZV7.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/84581da6-445c-4096-bd40-0bcf45c5b02e/lebron-pullover-hoodie-KNcZV7.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ae5c7da6-a8ca-42fd-b3fd-db16e76e3e2c/lebron-pullover-hoodie-KNcZV7.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3f80314d-13cb-4c61-b344-ef8abee9324e/lebron-pullover-hoodie-KNcZV7.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9c81cc52-fb99-4aea-9607-b41b801851ff/lebron-pullover-hoodie-KNcZV7.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/986c7753-d031-488d-b564-4d824c8e9ba0/lebron-pullover-hoodie-KNcZV7.png",
		],
	},
	{
		id: 9,
		title: "Jordan Essentials",
		subtitle: "Men's Graphic Fleece Hoodie",
		price: 99,
		images: [
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0e5dd410-854d-4844-a2d3-27ae76911ef7/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2dd027e8-69ef-4ba5-ad53-dacb5357ac61/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/34ed2550-5e6e-4040-a8a2-5e30f4fc3c37/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/dc75df64-67c0-4040-b2c1-0525a7bb4d92/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4365ef68-1d25-4df7-b866-1a4d7ddd588d/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6f2d8ecf-5034-4db8-813e-6abd2cdca168/jordan-essentials-graphic-fleece-hoodie-vMqvq0.png",
			"https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/d0a16c00-0e32-40a3-96fc-38c95d457d1f/image.jpg",
			"https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/672e544e-732c-4d14-90bd-a752205da2da/image.jpg",
		],
	},
];

export { brands, categories, products };
