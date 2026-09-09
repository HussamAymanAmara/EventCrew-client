import "./CSS/VolunteerProfileForm.css";


function VolunteerProfileForm(props) {
    const formData = props.formData;


    return (
        <form
            className="eventcrew-volunteer-profile-form"
            onSubmit={props.onSubmit}
        >

            <div className="eventcrew-profile-form-row">

                <div className="eventcrew-profile-form-group">

                    <label>
                        First name
                    </label>

                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-profile-form-group">

                    <label>
                        Last name
                    </label>

                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={props.onChange}
                        required
                    />

                </div>

            </div>


            <div className="eventcrew-profile-form-row">

                <div className="eventcrew-profile-form-group">

                    <label>
                        Phone
                    </label>

                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-profile-form-group">

                    <label>
                        Date of birth
                    </label>

                    <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={props.onChange}
                        required
                    />

                </div>

            </div>


            <div className="eventcrew-profile-form-row">

                <div className="eventcrew-profile-form-group">

                    <label>
                        City
                    </label>

                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-profile-form-group">

                    <label>
                        Area
                    </label>

                    <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={props.onChange}
                        required
                    />

                </div>

            </div>


            <div className="eventcrew-profile-form-group">

                <label>
                    About me
                </label>

                <textarea
                    name="aboutMe"
                    value={formData.aboutMe}
                    onChange={props.onChange}
                    required
                />

            </div>


            <button
                type="submit"
                className="eventcrew-profile-form-submit"
            >
                Save Changes
            </button>

        </form>
    );
}


export default VolunteerProfileForm;