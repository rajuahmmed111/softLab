// import { Component } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-form-array',

//   templateUrl: './form-array.component.html',
//   styleUrls: ['./form-array.component.scss'],
// })
// export class FormArrayComponent {
//   specForm: FormGroup;
//   savedSpecifications: any[] = [];
//   displayTable: boolean = false;
//   fieldCount = 10;
//   initialSpecs: string[] = [
//     'Storage Capacity',
//     'Primary Camera Resolution',
//     'Warranty Duration',
//     'Phone Model',
//     'Screen Size',
//     'Warranty Type',
//     'Condition',
//     'Processor Type',
//     'RAM',
//     'Number of SIM Card Slots',
//     'Number of Primary Cameras',
//     'Mobile Phone Features',
//     'Phone Type',
//     'Cellular',
//     'Supported Operating System',
//     'Mobile Cable Type',
//     'SIM Type',
//     'Screen Protector Type',
//     'Case Type',
//     'Safety Mark',
//     'Plug Type',
//     'Build-in Battery',
//     'GPS',
//     'Number of Cores',
//     'Dimension (L x W x H)',
//     'ROM',
//     'SIRIM Certified',
//     'MCMC Approved',
//     'With Magnet',
//     'Battery Quantity',
//     'With Battery',
//     'Fast Charging',
//     'NFC',
//     'Bluetooth',
//     'Weight(g)',
//     'Release Year',
//   ];

//   constructor(private fb: FormBuilder) {
//     this.specForm = this.fb.group({
//       specifications: this.fb.array([]),
//     });
//     // this.addSpecification();
//   }

//   ngOnInit(): void {
//     this.loadSpecificationsFromLocalStorage();
//     this.initialSpecs.forEach((spec) => this.addSpecification(spec));
//   }

//   get specifications(): FormArray {
//     return this.specForm.get('specifications') as FormArray;
//   }

//   addSpecification(specName: string = ''): void {
//     const specGroup = this.fb.group({
//       name: [specName, Validators.required],
//       value: ['', Validators.required],
//     });
//     this.specifications.push(specGroup);
//   }

//   removeSpecification(index: number) {
//     if (this.specifications.length > 1) {
//       this.specifications.removeAt(index);
//     }
//   }

//   submitForm() {
//     const specificationsData = this.specifications.value.filter((spec: any) => spec.value).map((spec: any) => ({name: spec.name, value: spec.value}));

//     localStorage.setItem('specifications', JSON.stringify(specificationsData));
//     this.loadSpecificationsFromLocalStorage();
//   }

//   showSpecifications() {
//     this.loadSpecificationsFromLocalStorage();
//     this.displayTable = true;
//   }

//   getSpecifications() {
//     const savedSpecifications = localStorage.getItem('specifications');
//     return savedSpecifications ? JSON.parse(savedSpecifications) : [];
//   }

//   loadSpecificationsFromLocalStorage() {
//     this.savedSpecifications = this.getSpecifications();
//     if (this.savedSpecifications.length) {
//       this.specForm.setControl(
//         'specifications',
//         this.fb.array(
//           this.savedSpecifications.map((spec: any) =>
//             this.fb.group({
//               name: [spec.name],
//               value: [spec.value],
//             })
//           )
//         )
//       );
//     }
//   }

//   showMore() {
//     if (this.fieldCount < this.specifications.length) {
//       this.fieldCount += 10;
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',

  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
})
export class FormArrayComponent {
  specForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.specForm = this.fb.group({
      specifications: this.fb.array([]),
    });
    this.addSpecification();
  }

  get specifications() {
    return this.specForm.get('specifications') as FormArray;
  }

  addSpecification() {
    const specGroup = this.fb.group({
      name: [''],
      options: this.fb.array([]),
    });
    this.specifications.push(specGroup);
  }

  removeSpecification(index: number) {
    this.specifications.removeAt(index);
  }

  specOption(index: number): FormArray {
    return this.specifications.at(index).get('options') as FormArray;
  }

  newOption(): FormGroup {
    return this.fb.group({
      option: '',
    });
  }

  addSpecOption(index: number) {
    this.specOption(index).push(this.newOption());
  }

  submitForm() {
    console.log('Form submitted', this.specForm.value);
  }
}
