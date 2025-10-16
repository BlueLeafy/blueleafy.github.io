import { BsSearch } from 'react-icons/bs';

function GlobalSearch() {
    {/* what props hshould it have?? data submit change */ }
    return (  
        <form>
            <div className="flex flex-row border border-neutral-200 rounded-xs w-full lg:w-[150px] lg:ms-auto">
                <input type="search" id="search" name="search" placeholder="Search..." className="px-2 w-full cursor-text" />
                <button className="cursor-pointer px-2 bg-blue-500">
                    <BsSearch className="text-white font-bold" />
                </button>
            </div>
        </form>
    );
};;

export default GlobalSearch;