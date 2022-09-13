import React from 'react'
import Controls from '../components/Controls'
import NavbarDesktop from '../components/NavbarDesktop'
import Pagination from '../components/pagination'
import Search from '../components/Search'
import Table from '../components/Table'
function Inventory() {
    return (
      <div className="flex">
        <NavbarDesktop />
        <div className="flex-1 overflow-auto">
          <Search />
          <Controls />
                <Table />
                <Pagination/>
        </div>
      </div>
    );
}

export default Inventory
