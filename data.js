// Product catalog data — shared by catalog.html and portfolio.html
// name/description are bilingual: {id: '...', en: '...'}
const PRODUCTS = {
  tshirt:{
    index:"01",
    name:{id:"T-Shirt", en:"T-Shirt"},
    thumbImage:"images/catalog/01-tshirt/thumb.jpg",
    detailImage:"images/catalog/01-tshirt/detail.jpg",
    description:{id:"T-shirt custom untuk kebutuhan komunitas, event, dan merchandise korporat sehari-hari.", en:"Everyday custom t-shirt for community, event, and corporate merchandise needs."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/01-tshirt/measure.png", rows:[["XS", 64, 48, 20], ["S", 66, 50, 21], ["M", 68, 52, 22], ["L", 70, 54, 23], ["XL", 72, 56, 24], ["2XL", 74, 58, 25], ["3XL", 77, 60, 26], ["4XL", 79, 63, 27]]},
    ]},
    materials:[["Cotton Combed 30 s", "12 Pcs", "Rp 55.000 - Rp 65.000"], ["Cotton Combed 24 s", "12 Pcs", "Rp 58.000 - Rp 68.000"], ["Cotton Combed 20 s", "12 Pcs", "Rp 60.000 - Rp 70.000"], ["Cotton Combed 18 s", "12 Pcs", "Rp 62.000 - Rp 72.000"]],
  },
  kemeja:{
    index:"02",
    name:{id:"Kemeja", en:"Shirt"},
    thumbImage:"images/catalog/02-kemeja/thumb.jpg",
    detailImage:"images/catalog/02-kemeja/detail.jpg",
    description:{id:"Kemeja custom profesional yang cocok untuk seragam perusahaan, organisasi, event, dan kebutuhan korporat.", en:"Professional custom shirt suitable for company uniforms, organizations, events, and corporate needs."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/02-kemeja/measure.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 85.000 - Rp 110.000"], ["Japan Drill", "12 Pcs", "Rp 95.000 - Rp 120.000"], ["Nagata Drill", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Tropical", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Ribstop", "12 Pcs", "Rp 95.000 - Rp 115.000"], ["Taipan", "12 Pcs", "Rp 115.000 - Rp 140.000"]],
  },
  workshirt:{
    index:"03",
    name:{id:"WorkShirt", en:"WorkShirt"},
    thumbImage:"images/catalog/03-workshirt/thumb.jpg",
    detailImage:"images/catalog/03-workshirt/detail.jpg",
    description:{id:"Kemeja kerja tahan banting untuk penggunaan industri dan lapangan, diperkuat untuk pemakaian harian.", en:"Heavy-duty work shirt built for industrial and field use, reinforced for daily wear."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:"Regular", measureImage:"images/catalog/03-workshirt/measure-regular.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
      {label:"Boxy", measureImage:"images/catalog/03-workshirt/measure-boxy.png", rows:[["XS", 60, 54, 27], ["S", 60, 56, 27], ["M", 62, 58, 29], ["L", 62, 60, 29], ["XL", 64, 63, 31], ["2XL", 64, 65, 31]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 90.000 - Rp 115.000"], ["Japan Drill", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Nagata Drill", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Tropical", "12 Pcs", "Rp 110.000 - Rp 135.000"], ["Ribstop", "12 Pcs", "Rp 100.000 - Rp 120.000"], ["Taipan", "12 Pcs", "Rp 120.000 - Rp 145.000"]],
  },
  pdh:{
    index:"04",
    name:{id:"PDH", en:"PDH"},
    thumbImage:"images/catalog/04-pdh/thumb.jpg",
    detailImage:"images/catalog/04-pdh/detail.jpg",
    description:{id:"Pakaian Dinas Harian yang dirancang mengikuti standar institusi dan organisasi.", en:"Formal daily working attire (Pakaian Dinas Harian) tailored for institutional and organizational standards."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/04-pdh/measure.png", rows:[["XS", 66, 50, "56/22"], ["S", 68, 52, "57/23"], ["M", 70, 54, "58/24"], ["L", 72, 56, "59/26"], ["XL", 74, 58, "60/28"], ["2XL", 77, 61, "62/29"], ["3XL", 79, 63, "63/30"], ["4XL", 81, 66, "64/29"]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 95.000 - Rp 120.000"], ["Japan Drill", "12 Pcs", "Rp 105.000 - Rp 130.000"], ["Nagata Drill", "12 Pcs", "Rp 110.000 - Rp 135.000"], ["Tropical", "12 Pcs", "Rp 115.000 - Rp 140.000"], ["Ribstop", "12 Pcs", "Rp 100.000 - Rp 125.000"], ["Taipan", "12 Pcs", "Rp 125.000 - Rp 150.000"]],
  },
  jaket:{
    index:"05",
    name:{id:"Jaket", en:"Jacket"},
    thumbImage:"images/catalog/05-jaket/thumb.jpg",
    detailImage:"images/catalog/05-jaket/detail.jpg",
    description:{id:"Outerwear dengan struktur rapi, dirancang untuk visibilitas branding dan daya tahan di kondisi outdoor.", en:"Structured outerwear designed for branding visibility and durability in outdoor conditions."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/05-jaket/measure.png", rows:[["XS", 62, 44, 54], ["S", 64, 47, 55], ["M", 66, 50, 56], ["L", 68, 53, 57], ["XL", 70, 56, 58], ["2XL", 74, 59, 59], ["3XL", 76, 62, 59], ["4XL", 78, 65, 60]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 135.000 - Rp 165.000"], ["Japan Drill", "12 Pcs", "Rp 145.000 - Rp 175.000"], ["Nagata Drill", "12 Pcs", "Rp 150.000 - Rp 180.000"], ["Tropical", "12 Pcs", "Rp 155.000 - Rp 185.000"]],
  },
  workjacket:{
    index:"06",
    name:{id:"Work Jacket", en:"Work Jacket"},
    thumbImage:"images/catalog/06-workjacket/thumb.jpg",
    detailImage:"images/catalog/06-workjacket/detail.jpg",
    description:{id:"Jaket lapangan tahan banting dengan bahan diperkuat untuk pekerjaan outdoor dan industri yang berat.", en:"Heavy-duty field jacket built with reinforced fabric for demanding outdoor and industrial work."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/06-workjacket/measure.png", rows:[["S", 59, 52, 55], ["M", 59, 54, 56], ["L", 60, 56, 57], ["XL", 60, 59, 58], ["2XL", 62, 62, 59], ["3XL", 62, 64, 59], ["4XL", 66, 68, 60]]},
    ]},
    materials:[["Baby Canvas", "12 Pcs", "Rp 160.000 - Rp 195.000"], ["Corduroy", "12 Pcs", "Rp 180.000 - Rp 220.000"], ["Canvas Marsoto", "12 Pcs", "Rp 170.000 - Rp 210.000"]],
  },
  rompi:{
    index:"07",
    name:{id:"Rompi", en:"Vest"},
    thumbImage:"images/catalog/07-rompi/thumb.jpg",
    detailImage:"images/catalog/07-rompi/detail.jpg",
    description:{id:"Rompi utility dan safety dengan panel diperkuat, cocok untuk tim lapangan dan operasional.", en:"Utility and safety vest built with reinforced panels, suitable for field and operational teams."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH"],variants:[
      {label:null, measureImage:"images/catalog/07-rompi/measure.png", rows:[["XS", 66, 50], ["S", 68, 52], ["M", 70, 54], ["L", 72, 56], ["XL", 74, 58], ["2XL", 77, 61], ["3XL", 79, 63], ["4XL", 81, 66]]},
    ]},
    materials:[["American Drill", "12 Pcs", "Rp 75.000 - Rp 95.000"], ["Japan Drill", "12 Pcs", "Rp 85.000 - Rp 105.000"], ["Nagata Drill", "12 Pcs", "Rp 90.000 - Rp 110.000"], ["Tropical", "12 Pcs", "Rp 95.000 - Rp 115.000"], ["Ribstop", "12 Pcs", "Rp 85.000 - Rp 105.000"], ["Taipan", "12 Pcs", "Rp 105.000 - Rp 125.000"]],
  },
  jaslab:{
    index:"08",
    name:{id:"Jas Lab", en:"Lab Coat"},
    thumbImage:"images/catalog/08-jaslab/thumb.jpg",
    detailImage:"images/catalog/08-jaslab/detail.jpg",
    description:{id:"Jas lab profesional untuk institusi klinis, laboratorium, dan pendidikan dengan tampilan bersih dan formal.", en:"Professional lab coat tailored for clinical, laboratory, and educational institutions requiring a clean, formal presentation."},
    sizeChart:{columns:["SIZE", "LENGTH", "WIDTH", "SLEEVE"],variants:[
      {label:null, measureImage:"images/catalog/08-jaslab/measure.png", rows:[["S", 84, 52, 54], ["M", 86, 54, 56], ["L", 88, 58, 58], ["XL", 90, 60, 60], ["2XL", 92, 64, 62], ["3XL", 95, 68, 64], ["4XL", 97, 70, 66]]},
    ]},
    materials:[["Oxford", "12 Pcs", "Rp 85.000 - Rp 110.000"]],
  },
  lanyard:{
    index:"09",
    name:{id:"Lanyard & ID Card", en:"Lanyard & ID Card"},
    thumbImage:"images/catalog/09-lanyard/thumb.jpg",
    detailImage:"images/catalog/09-lanyard/detail.jpg",
    description:{id:"Lanyard tenun custom dipadukan dengan ID card cetak tahan lama, untuk identifikasi karyawan dan akses event.", en:"Custom woven lanyard paired with a durable printed ID card, designed for employee identification and event access."},
    sizeChart:null,
    materials:[["Tissue", "12 Pcs", "Rp 15.000 - Rp 25.000"], ["Nylon", "12 Pcs", "Rp 12.000 - Rp 20.000"]],
  },
};