import React, { Component } from 'react';
import { Link, Location } from 'react-router';

import '../../../public/vendor/chosen/chosen.jquery.js'
import '../../../public/styles/plugins/chosen/bootstrap-chosen.css'
import '../../../public/styles/plugins/select2/select2.min.css'

class EditProfile extends Component {

    componentDidMount() {
        var self = this;
        $('.chosen-select').chosen({
                    width: "100%",
                    "disable_search": true
                });

        $(".select2_demo_1").select2();
                $(".select2_demo_2").select2();
                $(".select2_demo_3").select2();

        $('input[type=file]').change(function (e) {
            var reader = new FileReader();
            reader.onload = function (e) {
                self.setState({profileImageSrc: e.target.result});
            };
            reader.readAsDataURL(e.target.files[0]);
            console.log(self.state);
        });
    }

    constructor() {
        super();
        this.state = {
            profileImageSrc: "img/profile_big.jpg",
            firstname: "Jordan",
            lastname: "Hubbard",
            email: "jhubb95@yahoo.com",
            phone: "6014544734",
            phonetype: "mobile",
            street1: "151 Yucca Dr.",
            street2: "",
            city: "Jackson",
            state: "MS",
            zip: "39211",
            country: "United States",
            addresstype: "home"
        };
        console.log(this.state);
    }

    changePhoto() {
        console.log("Hello");
    }

    infoChanged(e) {
        switch(e.target.id) {
            case "firstname":
                this.setState({firstname: e.target.value});
                break;
            case "lastname":
                this.setState({lastname: e.target.value});
                break;
            case "phone":
                this.setState({phone: e.target.value});
                break;
            case "phonetype":
                this.setState({phonetype: e.target.value});
                break;
            case "street1":
                this.setState({street1: e.target.value});
                break;
            case "street2":
                this.setState({street2: e.target.value});
                break;
            case "city":
                this.setState({city: e.target.value});
                break;
            case "state":
                this.setState({state: e.target.value});
                break;
            case "zip":
                this.setState({zip: e.target.value});
                break;
            case "country":
                this.setState({country: e.target.value});
                break;
            case "addresstype":
                this.setState({addresstype: e.target.value});
                break;
        }
        console.log(this.state);
    }

    storeinfo() {
        console.log(this.state);
    }

    render() {
        document.body.style.backgroundColor = "#2f4050";

        return (
            <div>
                <div id="wrapper" className="gray-bg">
                    <div className="row border-bottom white-bg page-heading">
                        <div className="col-lg-10">
                            <h2>Edit Profile</h2>
                            <ol className="breadcrumb">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a>Forms</a>
                                </li>
                                <li className="active">
                                    <strong>Edit Profile</strong>
                                </li>
                            </ol>
                        </div>
                        <div className="col-lg-2">
                        </div>
                    </div>
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Edit Information</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <form method="get" className="form-horizontal">
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="text-center">
                                                                <div style={{marginTop: 20}}>
                                                                    <img alt="image" id="profileImage" style={{objectFit: 'cover'}} className="img-circle img-lg" src={this.state.profileImageSrc}/><br/>
                                                                    <label className="btn btn-link">Select Photo
                                                                        <input type="file" id="profileImageInput" style={{display: 'none'}} />
                                                                    </label><br/><br/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <br/><input id="firstname" name="firstname" type="text" defaultValue={this.state.firstname} className="form-control required" placeholder="First Name" onChange={this.infoChanged.bind(this)} />
                                                        </div>
                                                        <div className="col-md-6">
                                                            <br/><input id="lastname" name="lastname" type="text" defaultValue={this.state.lastname} className="form-control required" placeholder="Last Name" onChange={this.infoChanged.bind(this)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input id="email" name="email" type="text" value={this.state.email} className="form-control" placeholder="Email" disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-group">
                                                                <input id="phone" name="phone" type="text" className="form-control required" defaultValue={this.state.phone} placeholder="Phone Number" onChange={this.infoChanged.bind(this)} />
                                                                <div className="input-group-btn">
                                                                    <select id="phonetype" className="form-control required chosen-select" defaultValue={this.state.phonetype} onChange={this.infoChanged.bind(this)}>
                                                                        <option value="home">home</option>
                                                                        <option value="iphone">iphone</option>
                                                                        <option value="mobile">mobile</option>
                                                                        <option value="work">work</option>
                                                                        <option value="home fax">home fax</option>
                                                                        <option value="work fax">work fax</option>
                                                                        <option value="other">other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="input-group">
                                                                <input id="street1" name="street1" type="text" className="form-control required" defaultValue={this.state.street1} placeholder="Street Address" onChange={this.infoChanged.bind(this)} />
                                                                <div className="input-group-btn">
                                                                    <select id="addresstype" className="form-control required chosen-select" defaultValue={this.state.addresstype} onChange={this.infoChanged.bind(this)}>
                                                                        <option value="home">home</option>
                                                                        <option value="work">work</option>
                                                                        <option value="other">other</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <input id="street2" name="street2" type="text" className="form-control" defaultValue={this.state.street2} placeholder="Apt/Suite #" onChange={this.infoChanged.bind(this)} /><br/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <input id="city" name="city" type="text" className="form-control required" defaultValue={this.state.city} placeholder="City" onChange={this.infoChanged.bind(this)}/><br/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <select id="state" name="state" data-placeholder="State" className="form-control required" defaultValue={this.state.state} onChange={this.infoChanged.bind(this)}>
                                                                <option value="">State</option>
                                                                <option value="AL">Alabama</option>
                                                                <option value="AK">Alaska</option>
                                                                <option value="AZ">Arizona</option>
                                                                <option value="AR">Arkansas</option>
                                                                <option value="CA">California</option>
                                                                <option value="CO">Colorado</option>
                                                                <option value="CT">Connecticut</option>
                                                                <option value="DE">Delaware</option>
                                                                <option value="DC">District Of Columbia</option>
                                                                <option value="FL">Florida</option>
                                                                <option value="GA">Georgia</option>
                                                                <option value="HI">Hawaii</option>
                                                                <option value="ID">Idaho</option>
                                                                <option value="IL">Illinois</option>
                                                                <option value="IN">Indiana</option>
                                                                <option value="IA">Iowa</option>
                                                                <option value="KS">Kansas</option>
                                                                <option value="KY">Kentucky</option>
                                                                <option value="LA">Louisiana</option>
                                                                <option value="ME">Maine</option>
                                                                <option value="MD">Maryland</option>
                                                                <option value="MA">Massachusetts</option>
                                                                <option value="MI">Michigan</option>
                                                                <option value="MN">Minnesota</option>
                                                                <option value="MS">Mississippi</option>
                                                                <option value="MO">Missouri</option>
                                                                <option value="MT">Montana</option>
                                                                <option value="NE">Nebraska</option>
                                                                <option value="NV">Nevada</option>
                                                                <option value="NH">New Hampshire</option>
                                                                <option value="NJ">New Jersey</option>
                                                                <option value="NM">New Mexico</option>
                                                                <option value="NY">New York</option>
                                                                <option value="NC">North Carolina</option>
                                                                <option value="ND">North Dakota</option>
                                                                <option value="OH">Ohio</option>
                                                                <option value="OK">Oklahoma</option>
                                                                <option value="OR">Oregon</option>
                                                                <option value="PA">Pennsylvania</option>
                                                                <option value="RI">Rhode Island</option>
                                                                <option value="SC">South Carolina</option>
                                                                <option value="SD">South Dakota</option>
                                                                <option value="TN">Tennessee</option>
                                                                <option value="TX">Texas</option>
                                                                <option value="UT">Utah</option>
                                                                <option value="VT">Vermont</option>
                                                                <option value="VA">Virginia</option>
                                                                <option value="WA">Washington</option>
                                                                <option value="WV">West Virginia</option>
                                                                <option value="WI">Wisconsin</option>
                                                                <option value="WY">Wyoming</option>
                                                            </select><br/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <input id="zip" name="zip" type="text" className="form-control required" defaultValue={this.state.zip} placeholder="Zip" onChange={this.infoChanged.bind(this)} /><br/>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <select id="country" name="country" data-placeholder="Country" className="form-control required" defaultValue={this.state.country} onChange={this.infoChanged.bind(this)}>
                                                                <option value="">Country</option>
                                                                <option value="United States">United States</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                <option value="Afghanistan">Afghanistan</option>
                                                                <option value="Aland Islands">Aland Islands</option>
                                                                <option value="Albania">Albania</option>
                                                                <option value="Algeria">Algeria</option>
                                                                <option value="American Samoa">American Samoa</option>
                                                                <option value="Andorra">Andorra</option>
                                                                <option value="Angola">Angola</option>
                                                                <option value="Anguilla">Anguilla</option>
                                                                <option value="Antarctica">Antarctica</option>
                                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                                <option value="Argentina">Argentina</option>
                                                                <option value="Armenia">Armenia</option>
                                                                <option value="Aruba">Aruba</option>
                                                                <option value="Australia">Australia</option>
                                                                <option value="Austria">Austria</option>
                                                                <option value="Azerbaijan">Azerbaijan</option>
                                                                <option value="Bahamas">Bahamas</option>
                                                                <option value="Bahrain">Bahrain</option>
                                                                <option value="Bangladesh">Bangladesh</option>
                                                                <option value="Barbados">Barbados</option>
                                                                <option value="Belarus">Belarus</option>
                                                                <option value="Belgium">Belgium</option>
                                                                <option value="Belize">Belize</option>
                                                                <option value="Benin">Benin</option>
                                                                <option value="Bermuda">Bermuda</option>
                                                                <option value="Bhutan">Bhutan</option>
                                                                <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                                                                <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                                <option value="Botswana">Botswana</option>
                                                                <option value="Bouvet Island">Bouvet Island</option>
                                                                <option value="Brazil">Brazil</option>
                                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                                <option value="Bulgaria">Bulgaria</option>
                                                                <option value="Burkina Faso">Burkina Faso</option>
                                                                <option value="Burundi">Burundi</option>
                                                                <option value="Cambodia">Cambodia</option>
                                                                <option value="Cameroon">Cameroon</option>
                                                                <option value="Canada">Canada</option>
                                                                <option value="Cape Verde">Cape Verde</option>
                                                                <option value="Cayman Islands">Cayman Islands</option>
                                                                <option value="Central African Republic">Central African Republic</option>
                                                                <option value="Chad">Chad</option>
                                                                <option value="Chile">Chile</option>
                                                                <option value="China">China</option>
                                                                <option value="Christmas Island">Christmas Island</option>
                                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                                <option value="Colombia">Colombia</option>
                                                                <option value="Comoros">Comoros</option>
                                                                <option value="Congo">Congo</option>
                                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                                <option value="Cook Islands">Cook Islands</option>
                                                                <option value="Costa Rica">Costa Rica</option>
                                                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                                <option value="Croatia">Croatia</option>
                                                                <option value="Cuba">Cuba</option>
                                                                <option value="Curacao">Curacao</option>
                                                                <option value="Cyprus">Cyprus</option>
                                                                <option value="Czech Republic">Czech Republic</option>
                                                                <option value="Denmark">Denmark</option>
                                                                <option value="Djibouti">Djibouti</option>
                                                                <option value="Dominica">Dominica</option>
                                                                <option value="Dominican Republic">Dominican Republic</option>
                                                                <option value="Ecuador">Ecuador</option>
                                                                <option value="Egypt">Egypt</option>
                                                                <option value="El Salvador">El Salvador</option>
                                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                                <option value="Eritrea">Eritrea</option>
                                                                <option value="Estonia">Estonia</option>
                                                                <option value="Ethiopia">Ethiopia</option>
                                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                                <option value="Faroe Islands">Faroe Islands</option>
                                                                <option value="Fiji">Fiji</option>
                                                                <option value="Finland">Finland</option>
                                                                <option value="France">France</option>
                                                                <option value="French Guiana">French Guiana</option>
                                                                <option value="French Polynesia">French Polynesia</option>
                                                                <option value="French Southern Territories">French Southern Territories</option>
                                                                <option value="Gabon">Gabon</option>
                                                                <option value="Gambia">Gambia</option>
                                                                <option value="Georgia">Georgia</option>
                                                                <option value="Germany">Germany</option>
                                                                <option value="Ghana">Ghana</option>
                                                                <option value="Gibraltar">Gibraltar</option>
                                                                <option value="Greece">Greece</option>
                                                                <option value="Greenland">Greenland</option>
                                                                <option value="Grenada">Grenada</option>
                                                                <option value="Guadeloupe">Guadeloupe</option>
                                                                <option value="Guam">Guam</option>
                                                                <option value="Guatemala">Guatemala</option>
                                                                <option value="Guernsey">Guernsey</option>
                                                                <option value="Guinea">Guinea</option>
                                                                <option value="Guinea-bissau">Guinea-bissau</option>
                                                                <option value="Guyana">Guyana</option>
                                                                <option value="Haiti">Haiti</option>
                                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                                <option value="Honduras">Honduras</option>
                                                                <option value="Hong Kong">Hong Kong</option>
                                                                <option value="Hungary">Hungary</option>
                                                                <option value="Iceland">Iceland</option>
                                                                <option value="India">India</option>
                                                                <option value="Indonesia">Indonesia</option>
                                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                                <option value="Iraq">Iraq</option>
                                                                <option value="Ireland">Ireland</option>
                                                                <option value="Isle of Man">Isle of Man</option>
                                                                <option value="Israel">Israel</option>
                                                                <option value="Italy">Italy</option>
                                                                <option value="Jamaica">Jamaica</option>
                                                                <option value="Japan">Japan</option>
                                                                <option value="Jersey">Jersey</option>
                                                                <option value="Jordan">Jordan</option>
                                                                <option value="Kazakhstan">Kazakhstan</option>
                                                                <option value="Kenya">Kenya</option>
                                                                <option value="Kiribati">Kiribati</option>
                                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                                <option value="Korea, Republic of">Korea, Republic of</option>
                                                                <option value="Kuwait">Kuwait</option>
                                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                                <option value="Latvia">Latvia</option>
                                                                <option value="Lebanon">Lebanon</option>
                                                                <option value="Lesotho">Lesotho</option>
                                                                <option value="Liberia">Liberia</option>
                                                                <option value="Libya">Libya</option>
                                                                <option value="Liechtenstein">Liechtenstein</option>
                                                                <option value="Lithuania">Lithuania</option>
                                                                <option value="Luxembourg">Luxembourg</option>
                                                                <option value="Macao">Macao</option>
                                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                                <option value="Madagascar">Madagascar</option>
                                                                <option value="Malawi">Malawi</option>
                                                                <option value="Malaysia">Malaysia</option>
                                                                <option value="Maldives">Maldives</option>
                                                                <option value="Mali">Mali</option>
                                                                <option value="Malta">Malta</option>
                                                                <option value="Marshall Islands">Marshall Islands</option>
                                                                <option value="Martinique">Martinique</option>
                                                                <option value="Mauritania">Mauritania</option>
                                                                <option value="Mauritius">Mauritius</option>
                                                                <option value="Mayotte">Mayotte</option>
                                                                <option value="Mexico">Mexico</option>
                                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                                <option value="Monaco">Monaco</option>
                                                                <option value="Mongolia">Mongolia</option>
                                                                <option value="Montenegro">Montenegro</option>
                                                                <option value="Montserrat">Montserrat</option>
                                                                <option value="Morocco">Morocco</option>
                                                                <option value="Mozambique">Mozambique</option>
                                                                <option value="Myanmar">Myanmar</option>
                                                                <option value="Namibia">Namibia</option>
                                                                <option value="Nauru">Nauru</option>
                                                                <option value="Nepal">Nepal</option>
                                                                <option value="Netherlands">Netherlands</option>
                                                                <option value="New Caledonia">New Caledonia</option>
                                                                <option value="New Zealand">New Zealand</option>
                                                                <option value="Nicaragua">Nicaragua</option>
                                                                <option value="Niger">Niger</option>
                                                                <option value="Nigeria">Nigeria</option>
                                                                <option value="Niue">Niue</option>
                                                                <option value="Norfolk Island">Norfolk Island</option>
                                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                                <option value="Norway">Norway</option>
                                                                <option value="Oman">Oman</option>
                                                                <option value="Pakistan">Pakistan</option>
                                                                <option value="Palau">Palau</option>
                                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                                <option value="Panama">Panama</option>
                                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                                <option value="Paraguay">Paraguay</option>
                                                                <option value="Peru">Peru</option>
                                                                <option value="Philippines">Philippines</option>
                                                                <option value="Pitcairn">Pitcairn</option>
                                                                <option value="Poland">Poland</option>
                                                                <option value="Portugal">Portugal</option>
                                                                <option value="Puerto Rico">Puerto Rico</option>
                                                                <option value="Qatar">Qatar</option>
                                                                <option value="Reunion">Reunion</option>
                                                                <option value="Romania">Romania</option>
                                                                <option value="Russian Federation">Russian Federation</option>
                                                                <option value="Rwanda">Rwanda</option>
                                                                <option value="Saint Barthelemy">Saint Barthelemy</option>
                                                                <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                                <option value="Saint Lucia">Saint Lucia</option>
                                                                <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                                <option value="Samoa">Samoa</option>
                                                                <option value="San Marino">San Marino</option>
                                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                                <option value="Senegal">Senegal</option>
                                                                <option value="Serbia">Serbia</option>
                                                                <option value="Seychelles">Seychelles</option>
                                                                <option value="Sierra Leone">Sierra Leone</option>
                                                                <option value="Singapore">Singapore</option>
                                                                <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                                                                <option value="Slovakia">Slovakia</option>
                                                                <option value="Slovenia">Slovenia</option>
                                                                <option value="Solomon Islands">Solomon Islands</option>
                                                                <option value="Somalia">Somalia</option>
                                                                <option value="South Africa">South Africa</option>
                                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                                <option value="South Sudan">South Sudan</option>
                                                                <option value="Spain">Spain</option>
                                                                <option value="Sri Lanka">Sri Lanka</option>
                                                                <option value="Sudan">Sudan</option>
                                                                <option value="Suriname">Suriname</option>
                                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                                <option value="Swaziland">Swaziland</option>
                                                                <option value="Sweden">Sweden</option>
                                                                <option value="Switzerland">Switzerland</option>
                                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                                                <option value="Tajikistan">Tajikistan</option>
                                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                                <option value="Thailand">Thailand</option>
                                                                <option value="Timor-leste">Timor-leste</option>
                                                                <option value="Togo">Togo</option>
                                                                <option value="Tokelau">Tokelau</option>
                                                                <option value="Tonga">Tonga</option>
                                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                                <option value="Tunisia">Tunisia</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="Turkmenistan">Turkmenistan</option>
                                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                                <option value="Tuvalu">Tuvalu</option>
                                                                <option value="Uganda">Uganda</option>
                                                                <option value="Ukraine">Ukraine</option>
                                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                                <option value="United Kingdom">United Kingdom</option>
                                                                <option value="United States">United States</option>
                                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                                <option value="Uruguay">Uruguay</option>
                                                                <option value="Uzbekistan">Uzbekistan</option>
                                                                <option value="Vanuatu">Vanuatu</option>
                                                                <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
                                                                <option value="Viet Nam">Viet Nam</option>
                                                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                                <option value="Western Sahara">Western Sahara</option>
                                                                <option value="Yemen">Yemen</option>
                                                                <option value="Zambia">Zambia</option>
                                                                <option value="Zimbabwe">Zimbabwe</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hr-line-dashed"></div>
                                            <div className="form-group">
                                                <div className="col-sm-10 col-sm-offset-1">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <Link to="/home/profile" className="btn btn-white">Cancel</Link>&nbsp;
                                                            <Link to="/home/profile" className="btn btn-primary" type="submit" onClick={this.storeinfo.bind(this)}>Save changes</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditProfile