const searchFood = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear data
    searchField.value =''
    if(searchText == ''){ alert("Please enter your food name."); return;}
    //load data
    else{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        const res = await fetch(url)
        const data = await res.json();
        displaySearchResult(data.meals);
        // fetch(url)
        // .then(res => res.json())
        // .then(data => displaySearchResult(data.meals));
    }
}

const displaySearchResult = meals =>{
    // console.log(meals);
    const searchResult = document.getElementById('search-result');
    searchResult.innerHTML = ``
    //(need to add for if no food found)
    meals.forEach(meal => {
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text"></p>
            </div>
        </div>`
        searchResult.appendChild(div);
    });
}

const loadMealDetail = mealId =>{
    // console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url)
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    // console.log(meal);
    const mealDetails = document.getElementById('meal-details')
    // mealDetails.innerHTML = ``;
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = ` 
    <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Watch Menu</a>
    </div>
    `
    mealDetails.appendChild(div);
}