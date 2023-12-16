import HomeNavbar from "../components/HomeNavbar"
import HomeSearchBar from "../components/HomeSearchbar"
import HomeRecipeCardDisplay from "../components/HomeRecipeDisplay"



export default function HomePage() : JSX.Element
{
    return (
        <div>
          <HomeNavbar/>
          <HomeSearchBar/>
          <HomeRecipeCardDisplay/>
        </div>
      )
}
