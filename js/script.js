

// Portfolio item filter

const filterContainer=document.querySelector(".portfolio-filter"),
		filterBtns=filterContainer.children,
		totalFilterBtn=filterBtns.lenght,
		portfolioItems=document.querySelectorAll(".portfolio-item"),
		totalPortfolioItem=portfolioItems.lenght;


		for(let i=0; i<totalFilterBtn; i++){
			filterBtns[i].addEventListener("click", function(){
				filterContainer.querySelector(".active").classList.remove("active");
				this.classList.add("active");

				const filterValue=this.getAttribute("data-filter");
				console.log(filterValue)

			})
		}