import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ChildComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ChildComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LazyModule { }
