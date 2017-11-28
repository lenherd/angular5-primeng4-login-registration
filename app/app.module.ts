import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

// import needed PrimeNG modules here for input and button
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {SectionComponent}  from './section/section.component';

//primeng for tab
import {TabMenuModule} from 'primeng/components/tabmenu/tabmenu';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';

//drg-drop
import {DragDropModule} from 'primeng/components/dragdrop/dragdrop';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DataGridModule} from 'primeng/components/datagrid/datagrid';
import {PanelModule} from 'primeng/components/panel/panel';

//imp imports
import {DocumentService} from './section/service/document.service';
import {CarService} from '../app/_services/carservice';

//big reason for error
import { HttpClientModule, HttpClient } from '@angular/common/http';

//diagloue module
import {DialogModule} from 'primeng/components/dialog/dialog';
import {GrowlModule} from 'primeng/components/growl/growl';

//production mode
import {enableProdMode} from '@angular/core';
enableProdMode();

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        //input for button and input
        ButtonModule,
        InputTextModule,
        //tabmodule imports
        TabMenuModule,
        TabViewModule,
        CodeHighlighterModule,
        //drag-drop
        DragDropModule,
        DataTableModule,
        DataGridModule,
        PanelModule,
        BrowserAnimationsModule,
        //biggest reason for error
        HttpClientModule,
        //dialogue
        DialogModule,
        
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        SectionComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,

        //drag-drop
        DocumentService,
        CarService,
        //biggest reason for error
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }