import React, {useState} from 'react';

import classes from './ContactData.module.scss';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';
import {updateObject, checckValidity} from '../../../shared/ultility';
import axios from 'axios';

const ContactData = props => {

    const [checkedState, setCheckedState] = useState(true)

    const [contactForm, setContactForm] = useState(
        {
          name: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Fullname'
            },
            label: 'Name',
            value: '',
            validation: {
              required: true,
              minLength: 5,
              maxLength: 200
            },
            valid: false,
            touched: false
          },
          phone: {
            elementType: 'input',
            elementConfig: {
              type: 'number',
              placeholder: 'Phone Number'
            },
            value: '',
            label: 'Phone',
            validation: {
              required: true,
              minLength: 10,
              maxLength: 11
            },
            valid: false,
            touched: false
          },
          home: {
            elementType: 'input',
            elementConfig: {
              type: 'radio',
              id: 'home',
              name: 'site',
            },
            label: 'Receive goods at home / company / post office',
            value: 'home',
            validation: {},
            valid: true,
          },
          store: {
            elementType: 'input',
            elementConfig: {
              type: 'radio',
              id: 'store',
              name: 'site',
            },
            label: 'Pick up at the nearest YaMe store',
            value: 'store',
            validation: {},
            valid: true,
          },
          address: {
            elementType: 'input',
            elementConfig: {
              type: 'text',
              placeholder: 'Address'
            },
            label: 'Address',
            value: '',
            validation: {
              required: true,
            },
            valid: false,
            touched: false
          },
          deliveryMethod: {
            elementType: 'select',
            elementConfig: {
              options: [
                  {
                    name: 'Tp. Hồ Chí Minh',
                    values: [
                        'YaMe Q.10: 770F, Sư Vạn Hạnh (nd), P.12',
                        'YaMe Q.10: 286, 3 tháng 2, P.12',
                        'YaMe Q.5: 190, Nguyễn Trãi, P.3',
                        'YaMe Q.7: 323 Huỳnh Tấn Phát',
                        'YaMe Q.6: 102 Hậu Giang',
                        'YaMe Q.9 (1): 114 Đỗ Xuân Hợp',
                        'YaMe Q.9 (2): 200 Lê Văn Việt P.Tăng Nhơn Phú B',
                        'YaMe Q.BT: 138 Đinh Tiên Hoàng, P.1'
                    ]
                  },
                  {
                      name: 'Đông Nam Bộ',
                      values: [
                          'YaMe Biên Hòa: 30, Dương Tử Giang, Tp. Biên Hòa',
                          'YaMe Tx. Thuận An, Bình Dương: 132 Ngô Quyền',
                          'YaMe Bình Dương: 187, Yersin, Tp.Thủ Dầu Một'
                      ]
                  },
                  {
                      name: 'Tây Nam Bộ',
                      values: [
                          'YaMe Cần Thơ: 57 Nguyễn Trãi, Q. Ninh kiều',
                          'YaMe Cần Thơ 2: 45 đ.3 Tháng 2, Q.Ninh Kiều',
                          'YaMe Tân An: 492 Hùng Vương'
                      ]
                  },
                  {
                      name: 'Tây Nguyên',
                      values: [
                          'YaMe Buôn Ma Thuột: 64 Phan Chu Trinh, Tp.BMT'
                      ]
                  }

              ]
            },
            label: '',
            value: '',
            valid: false,
            touched: false,
            validation: {
              required: true
            }
          },
          
          note: {
            elementType: 'textarea',
            elementConfig: {
              type: 'text'
            },
            value: '',
            label: 'Note',
            validation: {
              required: true
            },
            valid: false,
            touched: false
          },
        }
      )
      const [formIsValid, setFormIsValid] = useState(false)

      const addHandler = (event) => {
        event.preventDefault();
    
        const formData = {};
        for (let formElementIdentifier in contactForm) {
          formData[formElementIdentifier] = contactForm[formElementIdentifier].value
        }

        console.log(formData)
    
        const add = {
          ...formData,
          date: new Date()
        };

        console.log(add)

        // axios.post('https://chatbot-2bd64.firebaseio.com/products.json', add)
    
      }

      const formChangedHandler = (event, inputIdentifier) => {

        const updatedFormElement = updateObject(contactForm[inputIdentifier], {
          value: event.target.value,
          valid : checckValidity(event.target.value, contactForm[inputIdentifier].validation),
          touched: true
        })
        
        const updatedOrderForm = updateObject(contactForm, {
          [inputIdentifier]: updatedFormElement
        });
    
        let formValid = true;
        for (let inputIdentifier in updatedOrderForm) {

          formValid = (updatedOrderForm[inputIdentifier].label === 'Address' && !checkedState) || (updatedOrderForm[inputIdentifier].elementType === 'select' && checkedState) ? true && formValid :
            updatedOrderForm[inputIdentifier].valid && formValid;
        }
    
        setContactForm(updatedOrderForm)
        setFormIsValid(formValid)
      }

      const checkHandle = () => {
        setCheckedState(!checkedState)
        let formValid = true;
        for (let inputIdentifier in contactForm) {

          formValid = (contactForm[inputIdentifier].label === 'Address' && checkedState) || (contactForm[inputIdentifier].elementType === 'select' && !checkedState) ? true && formValid :
          contactForm[inputIdentifier].valid && formValid;
        }
        setFormIsValid(formValid)
      }
    
      const formElementsArray = [];
      for (let key in contactForm) {
        formElementsArray.push({
          id: key,
          config: contactForm[key]
        })
      }

      let form = (
        <form onSubmit={addHandler}>

          {formElementsArray.map(formElement =>   
              <Input 
                name={formElement.config.label}
                key={formElement.id}
                elementType={formElement.config.elementType} 
                elementConfig={formElement.config.elementConfig} 
                value={formElement.config.value} 
                changed={event => formChangedHandler(event, formElement.id)}
                inValid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched}
                clicked={checkHandle}
                checked={checkedState}/> 
          )}
          <Button 
            btnType='Success' 
            disabled={!formIsValid && props.checkout !== null}
            >Order</Button>
        </form>
      )

      return (
        <div className={classes.ContactData}>
          <h4>Contact Data</h4>
          {form}
          <Button btnType='Danger' clicked={props.cancell}>Cancel</Button>
        </div>
      )
}

export default ContactData;