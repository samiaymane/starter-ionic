import {LogoutPage} from './logout.page';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';

describe('LogoutPage', () => {
    let component: LogoutPage;
    let fixture: ComponentFixture<LogoutPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ LogoutPage ],
            imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule]
        }).compileComponents();

        fixture = TestBed.createComponent(LogoutPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
