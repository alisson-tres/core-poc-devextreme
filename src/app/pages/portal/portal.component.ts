import {
  ChangeDetectorRef,
  Component,
  Injectable,
  NgModule,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DxBoxModule, DxTreeViewComponent } from 'devextreme-angular';
import { registerPalette, currentPalette } from 'devextreme/viz/palette';

/** CRAZY DATA DEBUG **/

export class Customer {
  ID: number = 0;
  CompanyName: string = '';
  Address: string = '';
  City: string = '';
  State: string = '';
  Zipcode: number = 0;
  Phone: string = '';
  Fax: string = '';
  Website: string = '';
}
const customers: Customer[] = [
  {
    ID: 1,
    CompanyName: 'Super Mart of the West',
    Address: '702 SW 8th Street',
    City: 'Bentonville',
    State: 'Arkansas',
    Zipcode: 72716,
    Phone: '(800) 555-2797',
    Fax: '(800) 555-2171',
    Website: 'http://www.nowebsitesupermart.com',
  },
  {
    ID: 2,
    CompanyName: 'Electronics Depot',
    Address: '2455 Paces Ferry Road NW',
    City: 'Atlanta',
    State: 'Georgia',
    Zipcode: 30339,
    Phone: '(800) 595-3232',
    Fax: '(800) 595-3231',
    Website: 'http://www.nowebsitedepot.com',
  },
  {
    ID: 3,
    CompanyName: 'K&S Music',
    Address: '1000 Nicllet Mall',
    City: 'Minneapolis',
    State: 'Minnesota',
    Zipcode: 55403,
    Phone: '(612) 304-6073',
    Fax: '(612) 304-6074',
    Website: 'http://www.nowebsitemusic.com',
  },
  {
    ID: 4,
    CompanyName: "Tom's Club",
    Address: '999 Lake Drive',
    City: 'Issaquah',
    State: 'Washington',
    Zipcode: 98027,
    Phone: '(800) 955-2292',
    Fax: '(800) 955-2293',
    Website: 'http://www.nowebsitetomsclub.com',
  },
  {
    ID: 5,
    CompanyName: 'E-Mart',
    Address: '3333 Beverly Rd',
    City: 'Hoffman Estates',
    State: 'Illinois',
    Zipcode: 60179,
    Phone: '(847) 286-2500',
    Fax: '(847) 286-2501',
    Website: 'http://www.nowebsiteemart.com',
  },
  {
    ID: 6,
    CompanyName: 'Walters',
    Address: '200 Wilmot Rd',
    City: 'Deerfield',
    State: 'Illinois',
    Zipcode: 60015,
    Phone: '(847) 940-2500',
    Fax: '(847) 940-2501',
    Website: 'http://www.nowebsitewalters.com',
  },
  {
    ID: 7,
    CompanyName: 'StereoShack',
    Address: '400 Commerce S',
    City: 'Fort Worth',
    State: 'Texas',
    Zipcode: 76102,
    Phone: '(817) 820-0741',
    Fax: '(817) 820-0742',
    Website: 'http://www.nowebsiteshack.com',
  },
  {
    ID: 8,
    CompanyName: 'Circuit Town',
    Address: '2200 Kensington Court',
    City: 'Oak Brook',
    State: 'Illinois',
    Zipcode: 60523,
    Phone: '(800) 955-2929',
    Fax: '(800) 955-9392',
    Website: 'http://www.nowebsitecircuittown.com',
  },
  {
    ID: 9,
    CompanyName: 'Premier Buy',
    Address: '7601 Penn Avenue South',
    City: 'Richfield',
    State: 'Minnesota',
    Zipcode: 55423,
    Phone: '(612) 291-1000',
    Fax: '(612) 291-2001',
    Website: 'http://www.nowebsitepremierbuy.com',
  },
  {
    ID: 10,
    CompanyName: 'ElectrixMax',
    Address: '263 Shuman Blvd',
    City: 'Naperville',
    State: 'Illinois',
    Zipcode: 60563,
    Phone: '(630) 438-7800',
    Fax: '(630) 438-7801',
    Website: 'http://www.nowebsiteelectrixmax.com',
  },
  {
    ID: 11,
    CompanyName: 'Video Emporium',
    Address: '1201 Elm Street',
    City: 'Dallas',
    State: 'Texas',
    Zipcode: 75270,
    Phone: '(214) 854-3000',
    Fax: '(214) 854-3001',
    Website: 'http://www.nowebsitevideoemporium.com',
  },
  {
    ID: 12,
    CompanyName: 'Screen Shop',
    Address: '1000 Lowes Blvd',
    City: 'Mooresville',
    State: 'North Carolina',
    Zipcode: 28117,
    Phone: '(800) 445-6937',
    Fax: '(800) 445-6938',
    Website: 'http://www.nowebsitescreenshop.com',
  },
];
@Injectable()
export class CustomerService {
  getCustomers() {
    return customers;
  }
}

const companies: any[] = [
  {
    ID: 1,
    name: 'Creare Sistemas',
  },
  {
    ID: 3,
    name: 'BlueFile Technologies',
    categoryId: 1,
  },
  {
    ID: 4,
    name: 'CMPC',
    categoryId: 1,
  },
  {
    ID: 5,
    name: 'Creare Australia',
    categoryId: 1,
  },
  {
    ID: 6,
    name: 'Frota Creare/GoAwake',
    categoryId: 1,
  },
  {
    ID: 7,
    name: 'GoAwake USA',
    categoryId: 6,
  },

  {
    ID: 2,
    name: 'Mariana',
  },
  {
    ID: 8,
    name: 'Fabrica Nova',
    categoryId: 2,
  },
  {
    ID: 10,
    name: 'FN-Auxiliar',
    categoryId: 8,
  },
  {
    ID: 11,
    name: 'FN-Fora de Estrada',
    categoryId: 8,
  },
  {
    ID: 9,
    name: 'Fazendão',
    categoryId: 2,
  },
  {
    ID: 12,
    name: 'FZ-Auxiliar',
    categoryId: 9,
  },
  {
    ID: 13,
    name: 'FZ-Fora de Estrada',
    categoryId: 9,
  },
];
@Injectable()
export class CompanyService {
  getCompanies() {
    return companies;
  }
}

const drivers: any[] = [
  {
    ID: 1,
    name: 'Motorista 1',
  },
  {
    ID: 2,
    name: 'Motorista 2',
  },
  {
    ID: 3,
    name: 'Motorista 3',
  },
  {
    ID: 4,
    name: 'Motorista 4',
  },
  {
    ID: 5,
    name: 'Motorista 5',
  },
  {
    ID: 6,
    name: 'Motorista 6',
  },
  {
    ID: 7,
    name: 'Motorista 7',
  },
  {
    ID: 8,
    name: 'Motorista 8',
  },
  {
    ID: 9,
    name: 'Motorista 9',
  },
  {
    ID: 10,
    name: 'Motorista 10',
  },
  {
    ID: 11,
    name: 'Motorista 11',
  },
];
@Injectable()
export class DriverService {
  getDrivers() {
    return drivers;
  }
}

const vehicles: any[] = [
  {
    ID: 1,
    name: 'VHC-0001 - Veículo',
  },
  {
    ID: 2,
    name: 'VHC-0002 - Veículo',
  },
  {
    ID: 3,
    name: 'VHC-1003 - Veículo',
  },
  {
    ID: 4,
    name: 'VHC-2020 - Veículo',
  },
  {
    ID: 5,
    name: 'VHC-34A6 - Veículo',
  },
  {
    ID: 6,
    name: 'VHC-0022 - Veículo',
  },
  {
    ID: 7,
    name: 'VHC-0101 - Veículo',
  },
  {
    ID: 8,
    name: 'VHC-2000 - Veículo',
  },
  {
    ID: 9,
    name: 'VHC-0555 - Veículo',
  },
  {
    ID: 10,
    name: 'VHC-0404 - Veículo',
  },
  {
    ID: 11,
    name: 'VHC-0ABC - Veículo',
  },
  {
    ID: 12,
    name: 'VHC-1CBT - Veículo',
  },
  {
    ID: 13,
    name: 'VHC-0WK3 - Veículo',
  },
  {
    ID: 14,
    name: 'VHC-9899 - Veículo',
  },
  {
    ID: 15,
    name: 'ABC-0058 - Veículo',
  },
  {
    ID: 16,
    name: 'XYZ-6006 - Veículo',
  },
  {
    ID: 17,
    name: 'VHC-0333 - Veículo',
  },
  {
    ID: 18,
    name: 'VHC-8795 - Veículo',
  },
  {
    ID: 19,
    name: 'VHC-AK47 - Veículo',
  },
];
@Injectable()
export class VehicleService {
  getVehicles() {
    return vehicles;
  }
}

const highRiskAlerts: any[] = [
  {
    alertType: 'highRisk',
    val: 181,
  },
  {
    alertType: 'others',
    val: 274,
  },
];
const mediumRiskAlerts: any[] = [
  {
    alertType: 'mediumRisk',
    val: 4,
  },
  {
    alertType: 'others',
    val: 274,
  },
];
const lowRiskAlerts: any[] = [
  {
    alertType: 'lowRisk',
    val: 52,
  },
  {
    alertType: 'others',
    val: 274,
  },
];
const noRiskAlerts: any[] = [
  {
    alertType: 'noRisk',
    val: 37,
  },
  {
    alertType: 'others',
    val: 274,
  },
];
@Injectable()
export class AlertsService {
  getHighRiskAlerts() {
    return highRiskAlerts;
  }
  getMediumRiskAlerts() {
    return mediumRiskAlerts;
  }
  getLowRiskAlerts() {
    return lowRiskAlerts;
  }
  getNoRiskAlerts() {
    return noRiskAlerts;
  }
}

/** Classe de dados de fato ------------------------------------------------------------------- **/

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss'],
  providers: [
    CustomerService,
    CompanyService,
    DriverService,
    VehicleService,
    AlertsService,
  ],
})
export class PortalComponent implements OnInit {
  @ViewChild(DxTreeViewComponent, { static: false }) treeView: any;

  syncTreeViewSelection(item: string) {
    if (!this.treeView) return;

    if (!this.companyBoxValue) {
      this.treeView.instance.unselectAll();
    } else {
      this.treeView.instance.selectItem(item);
    }
  }

  gridBox_displayExpr(item: any) {
    return item && `${item.CompanyName} <${item.Phone}>`;
  }

  /* Dropdown box select for COMPANIES */
  companyBoxValue: string = '';
  isCompanyBoxOpened: boolean = false;
  companies: any[];

  companyItemSelectionChanged(e: any) {
    console.log('companyItemSelectionChanged()');
    this.companyBoxValue = e.component.getSelectedNodeKeys();
  }
  onTreeBoxOptionChanged(e: any) {
    console.log('onTreeBoxOptionChanged()');
    let nodeSelection: any[] = e.component.getSelectedNodeKeys();
    console.log(e.component.getSelectedNodeKeys());
    if (nodeSelection.length == 1) {
      console.log(e.component.getSelectedNodes());
    } else {
    }
  }

  /* Dropdown box select for DRIVERS */
  driverBoxValue: number[] = [];
  isDriverBoxOpened: boolean = false;
  drivers: any[];

  driverItemSelectionChanged(e: any) {
    console.log('companyItemSelectionChanged()');
    this.companyBoxValue = e.component.getSelectedNodeKeys();
  }

  /* Dropdown box select for VEHICLES */
  vehicleBoxValue: number[] = [];
  isVehicleBoxOpened: boolean = false;
  vehicles: any[];

  vehicleItemSelectionChanged(e: any) {
    console.log('companyItemSelectionChanged()');
    this.companyBoxValue = e.component.getSelectedNodeKeys();
  }

  /* Load data for Alert Doughnut charts */
  highRisksAlerts: any[];
  mediumRisksAlerts: any[];
  lowRisksAlerts: any[];
  noRisksAlerts: any[];

  /* Load data for DataGrid example */
  customers: Customer[];

  constructor(
    private ref: ChangeDetectorRef,
    companyService: CompanyService,
    customerService: CustomerService,
    driverService: DriverService,
    vehicleService: VehicleService,
    alertService: AlertsService
  ) {
    this.companies = companyService.getCompanies();
    this.drivers = driverService.getDrivers();
    this.vehicles = vehicleService.getVehicles();

    this.highRisksAlerts = alertService.getHighRiskAlerts();
    this.mediumRisksAlerts = alertService.getMediumRiskAlerts();
    this.lowRisksAlerts = alertService.getLowRiskAlerts();
    this.noRisksAlerts = alertService.getNoRiskAlerts();

    this.customers = customerService.getCustomers();
  }

  ngOnInit(): void { }
}
