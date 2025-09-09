const categoryContainer = document.getElementById("categoryContainer")
const plantsContainer =document.getElementById("plantsContainer")
const allPlantTrees = document.getElementById("allPlantTrees")

allPlantTrees.addEventListener("click", (e)=>{
    console.log(e.target);
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res=>res.json())
    .then(data=>{
        showPlantsByCategory(data.plants)
        // console.log(data.plants);
        const plantsTree = data.plants
        // console.log(plantsTree);
        showAllPlantsTree(plantsTree)
    })
    .catch(err=>{
        console.log(err);
    })
})

const showAllPlantsTree = (allPlants) =>{
    allPlants.forEach(plant =>{
        console.log(plant.category);
        allPlantTrees.innerHTML +=``
    })
}

const loadPlantCategory =()=>{
fetch("https://openapi.programming-hero.com/api/categories")
.then(res=>res.json())
.then(data=>{
    // console.log(data.categories);
    const categories = data.categories
    // console.log(categories);
    showPlantCategory(categories)
})
.catch(err=>{
    console.log(err);
})
}

const showPlantCategory = (categories)=>{
      categories.forEach(cat => {
        // console.log(cat.category_name);
        categoryContainer.innerHTML +=`
        <li id="${cat.id}" class="hover:bg-green-600 hover:text-white hover:gap-4 rounded-lg p-2 cursor-pointer">${cat.category_name}</li>
        `
    });
    
    categoryContainer.addEventListener('click', (e)=>{
            const allLi = document.querySelectorAll("li")
            allLi.forEach(li =>{
                li.classList.remove("bg-green-600")
                li.classList.remove("text-white")
            })
            if(e.target.localName === 'li'){
            // console.log(e.target);
            showLoading()
            e.target.classList.add("bg-green-600")
            e.target.classList.add("text-white")
            loadPlantsByCategory(e.target.id)
        }
    })
}

const loadPlantsByCategory = (plantsId)=>{
    console.log(plantsId);
    fetch(`https://openapi.programming-hero.com/api/category/${plantsId}`)
    .then(res => res.json())
    .then(data=>{
        // console.log(data.plants);
        showPlantsByCategory(data.plants)
    })
    .catch(err=>{
        console.log(err);
    })
}

const showPlantsByCategory = (plants)=>{
    console.log(plants);
    plantsContainer.innerHTML = ""
    plants.forEach(plant=>{
        plantsContainer.innerHTML +=`
        <div class=" bg-white shadow border border-gray-300 rounded-lg h-[36rem] w-full md:w-[13rem] md:gap-7 lg:w-[17rem] m-2">
         <div>
             <img class="rounded-t-lg w-full md:w-[18rem] h-[16rem]" src="${plant.image}" alt="">
         </div>
        <div class="p-5">
            <h1 onclick="loadPlantDetail(${plant.id})" class="text-base font-semibold cursor-pointer">${plant.name}</h1>
            <p class="text-sm font-norma mt-2">${plant.description.slice(0,110)}...</p>
            <div class="flex justify-between items-center">
            <button class="btn border border-green-400 text-sky-500 mt-3">${plant.category}</button>
            <p class="text-green-600 font-bold"><span class="font-bold">৳</span> ${plant.price}</p>
           </div>
            <button class="btn btn-wide bg-green-500 text-white rounded-xl mt-5 ">Add to Cart</button>
         </div>
        </div>

        `
    })
}

const loadPlantDetail =async (plantId)=>{
    const url = (`https://openapi.programming-hero.com/api/plant/${plantId}`)
    const res = await fetch(url)
    const details = await res.json()
    console.log(details);
    showPlantDetails(details.plants);
}

const showPlantDetails = (plant)=>{
    console.log(plant);
    const detailsBox = document.getElementById("detailsContainer")
    detailsBox.innerHTML =`
     <div>
              <h2 class="font-bold text-lg">${plant.name}</h2>
              <div class="h-[300px] mt-5">
                 <img class="rounded-lg h-full w-full object-cover" src="${plant.image}" alt="">
              </div>
              <p class="mt-3"><span class="font-bold ">Category:</span> ${plant.category}</p>
              <p class="mt-3"><span class="font-bold">Price: ৳</span> ${plant.price}</p>
              <p class="mt-3"><span class="font-bold">Description</span> ${plant.description}</p>
            </div>
    `
    document.getElementById("my_modal_5").showModal();
}

const showLoading =()=>{
    plantsContainer.innerHTML = `
    <div class="flex justify-center items-center mx-auto">
    <span class="loading loading-dots loading-xl"></span>
    </div>
          </div>
    `
}

loadPlantCategory()
loadPlantsByCategory("1")