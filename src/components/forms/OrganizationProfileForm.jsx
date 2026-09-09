import { Link } from "react-router-dom";
import "./CSS/OrganizationProfileForm.css";


function OrganizationProfileForm(props) {
    const formData = props.formData;


    return (
        <form
            className="eventcrew-org-profile-form"
            onSubmit={props.onSubmit}
        >

            <section className="eventcrew-org-profile-form-section">

                <h2>
                    Organization information
                </h2>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Organization name
                    </label>

                    <input
                        type="text"
                        name="organization_name"
                        value={formData.organization_name}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Organization type
                    </label>

                    <select
                        name="organization_type_id"
                        value={formData.organization_type_id}
                        onChange={props.onChange}
                        required
                    >

                        <option value="">
                            Select organization type
                        </option>

                        <option value="1">
                            NGO / Non-profit
                        </option>

                        <option value="2">
                            Marketing Agency
                        </option>

                        <option value="3">
                            Educational Institution
                        </option>

                        <option value="4">
                            Healthcare Organization
                        </option>

                        <option value="5">
                            Corporate / Business
                        </option>

                        <option value="6">
                            Government Organization
                        </option>

                        <option value="7">
                            Community Organization
                        </option>

                        <option value="8">
                            Event Management Company
                        </option>

                    </select>

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Tagline
                    </label>

                    <input
                        type="text"
                        name="tagline"
                        value={formData.tagline}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Organization size
                    </label>

                    <input
                        type="text"
                        name="organization_size"
                        value={formData.organization_size}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Logo URL
                    </label>

                    <input
                        type="url"
                        name="logo_url"
                        value={formData.logo_url}
                        onChange={props.onChange}
                    />

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        About the organization
                    </label>

                    <textarea
                        name="about_organization"
                        value={formData.about_organization}
                        onChange={props.onChange}
                        required
                    />

                </div>

            </section>


            <section className="eventcrew-org-profile-form-section">

                <h2>
                    Contact information
                </h2>


                <div className="eventcrew-org-profile-form-row">

                    <div className="eventcrew-org-profile-form-group">

                        <label>
                            Contact person
                        </label>

                        <input
                            type="text"
                            name="contact_person"
                            value={formData.contact_person}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-profile-form-group">

                        <label>
                            Job title
                        </label>

                        <input
                            type="text"
                            name="contact_job_title"
                            value={formData.contact_job_title}
                            onChange={props.onChange}
                            required
                        />

                    </div>

                </div>


                <div className="eventcrew-org-profile-form-row">

                    <div className="eventcrew-org-profile-form-group">

                        <label>
                            Email
                        </label>

                        <input
                            type="email"
                            name="contact_email"
                            value={formData.contact_email}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-profile-form-group">

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

                </div>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Website
                    </label>

                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={props.onChange}
                    />

                </div>

            </section>


            <section className="eventcrew-org-profile-form-section">

                <h2>
                    Office location
                </h2>


                <div className="eventcrew-org-profile-form-group">

                    <label>
                        Street address
                    </label>

                    <input
                        type="text"
                        name="office_street_address"
                        value={formData.office_street_address}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-org-profile-form-row">

                    <div className="eventcrew-org-profile-form-group">

                        <label>
                            City
                        </label>

                        <input
                            type="text"
                            name="office_city"
                            value={formData.office_city}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-org-profile-form-group">

                        <label>
                            Area
                        </label>

                        <input
                            type="text"
                            name="office_area"
                            value={formData.office_area}
                            onChange={props.onChange}
                            required
                        />

                    </div>

                </div>

            </section>


            <div className="eventcrew-org-profile-form-actions">

                <Link
                    to="/organization/profile"
                    className="eventcrew-org-profile-form-cancel"
                >
                    Cancel
                </Link>


                <button
                    type="submit"
                    className="eventcrew-org-profile-form-save"
                >
                    Save Changes
                </button>

            </div>

        </form>
    );
}


export default OrganizationProfileForm;