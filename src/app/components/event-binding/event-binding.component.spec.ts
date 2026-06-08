/// <reference types="jasmine" />
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventBindingComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial message for button 2', () => {
    const messageElement = getMessageElement();
    expect(messageElement.textContent?.trim()).toContain('button 2 not clicked');
  });

  it('should update message when button 2 is clicked', () => {
    const button2 = getButton2();

    button2.click();
    fixture.detectChanges();

    const messageElement = getMessageElement();
    expect(messageElement.textContent?.trim()).not.toContain('button 2 not clicked');
    expect(messageElement.textContent?.trim()).toContain('button 2 clicked!');
  });

  // Helper functions for better readability and maintenance
  function getMessageElement(): HTMLElement {
    const messageElement = fixture.nativeElement.querySelector('[data-testid="button2-message"]') as HTMLElement
      || fixture.nativeElement.querySelector('.button2-message') as HTMLElement
      || Array.from<HTMLElement>(fixture.nativeElement.querySelectorAll('p') as NodeListOf<HTMLElement>).find((el) =>
        el.textContent?.trim().toLowerCase().includes('button 2')
      );

    if (!messageElement) {
      throw new Error('Unable to find the button 2 message element in the template.');
    }

    return messageElement;
  }

  function getButton2(): HTMLButtonElement {
    const button2 = fixture.nativeElement.querySelector('[data-testid="button2"]') as HTMLButtonElement
      || fixture.nativeElement.querySelector('button[id="button2"]') as HTMLButtonElement
      || Array.from<HTMLButtonElement>(fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>).find((btn) =>
        btn.textContent?.trim().toLowerCase().includes('button 2')
      );

    if (!button2) {
      throw new Error('Unable to find button 2 in the template.');
    }

    return button2;
  }
});