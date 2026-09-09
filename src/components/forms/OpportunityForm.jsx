import "./CSS/OpportunityForm.css";


function OpportunityForm(props) {

    const formData = props.formData;

    const categories = props.categories || [];

    const skills = props.skills || [];

    const selectedSkillIds = props.selectedSkillIds || [];


    return (

        <form
            className="eventcrew-opportunity-form"
            onSubmit={props.onSubmit}
        >


            {/* Opportunity information */}

            <div className="eventcrew-form-section">

                <h2>
                    Opportunity information
                </h2>


                <div className="eventcrew-form-group">

                    <label>
                        Title
                    </label>

                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Description
                    </label>

                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Category
                        </label>

                        <select
                            name="category_id"
                            value={formData.category_id}
                            onChange={props.onChange}
                            required
                        >

                            <option value="">
                                Select category
                            </option>


                            {categories.map((category) => (

                                <option
                                    key={category.category_id}
                                    value={category.category_id}
                                >
                                    {category.category_name}
                                </option>

                            ))}

                        </select>

                    </div>


                    <div className="eventcrew-form-group">

                        <label>
                            Opportunity type
                        </label>

                        <select
                            name="opportunity_type"
                            value={formData.opportunity_type}
                            onChange={props.onChange}
                            required
                        >

                            <option value="one-time">
                                One-time
                            </option>

                            <option value="recurring">
                                Recurring
                            </option>

                            <option value="ongoing">
                                Ongoing
                            </option>

                        </select>

                    </div>


                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Opportunity image URL
                    </label>

                    <input
                        type="url"
                        name="image_url"
                        value={formData.image_url}
                        onChange={props.onChange}
                    />

                </div>


            </div>


            {/* Compensation */}

            <div className="eventcrew-form-section">

                <h2>
                    Compensation
                </h2>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Compensation type
                        </label>

                        <select
                            name="compensation_type"
                            value={formData.compensation_type}
                            onChange={props.onChange}
                            required
                        >

                            <option value="unpaid">
                                Unpaid
                            </option>

                            <option value="paid">
                                Paid
                            </option>

                        </select>

                    </div>


                    <div className="eventcrew-form-group">

                        <label>
                            Compensation amount
                        </label>

                        <input
                            type="number"
                            name="compensation_amount"
                            value={formData.compensation_amount}
                            onChange={props.onChange}
                            disabled={
                                formData.compensation_type === "unpaid"
                            }
                            min="0"
                        />

                    </div>


                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Payment schedule
                    </label>

                    <input
                        type="text"
                        name="payment_schedule"
                        value={formData.payment_schedule}
                        onChange={props.onChange}
                        disabled={
                            formData.compensation_type === "unpaid"
                        }
                    />

                </div>


            </div>


            {/* Date and time */}

            <div className="eventcrew-form-section">

                <h2>
                    Date and time
                </h2>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Event date
                        </label>

                        <input
                            type="date"
                            name="event_date"
                            value={formData.event_date}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-form-group">

                        <label>
                            Application deadline
                        </label>

                        <input
                            type="date"
                            name="application_deadline"
                            value={formData.application_deadline}
                            onChange={props.onChange}
                        />

                    </div>


                </div>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Start time
                        </label>

                        <input
                            type="time"
                            name="start_time"
                            value={formData.start_time}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                    <div className="eventcrew-form-group">

                        <label>
                            End time
                        </label>

                        <input
                            type="time"
                            name="end_time"
                            value={formData.end_time}
                            onChange={props.onChange}
                            required
                        />

                    </div>


                </div>


            </div>


            {/* Location */}

            <div className="eventcrew-form-section">

                <h2>
                    Location
                </h2>


                <div className="eventcrew-form-group">

                    <label>
                        Venue name
                    </label>

                    <input
                        type="text"
                        name="venue_name"
                        value={formData.venue_name}
                        onChange={props.onChange}
                        required
                    />

                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Street address
                    </label>

                    <input
                        type="text"
                        name="street_address"
                        value={formData.street_address}
                        onChange={props.onChange}
                    />

                </div>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Building number
                        </label>

                        <input
                            type="text"
                            name="building_number"
                            value={formData.building_number}
                            onChange={props.onChange}
                        />

                    </div>


                    <div className="eventcrew-form-group">

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


                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Transport notes
                    </label>

                    <textarea
                        name="transport_notes"
                        value={formData.transport_notes}
                        onChange={props.onChange}
                    />

                </div>


            </div>


            {/* Volunteer requirements */}

            <div className="eventcrew-form-section">

                <h2>
                    Volunteer requirements
                </h2>


                <div className="eventcrew-form-row">


                    <div className="eventcrew-form-group">

                        <label>
                            Volunteers needed
                        </label>

                        <input
                            type="number"
                            name="volunteers_needed"
                            value={formData.volunteers_needed}
                            onChange={props.onChange}
                            min="1"
                            required
                        />

                    </div>


                    <div className="eventcrew-form-group">

                        <label>
                            Minimum age
                        </label>

                        <input
                            type="number"
                            name="minimum_age"
                            value={formData.minimum_age}
                            onChange={props.onChange}
                            min="0"
                            max="100"
                        />

                    </div>


                </div>


                {/* Required skills */}

                <div className="eventcrew-required-skills">

                    <div className="eventcrew-required-skills-header">

                        <label>
                            Required skills
                        </label>

                        <p>
                            Select the skills needed for this opportunity.
                        </p>

                    </div>


                    <div className="eventcrew-required-skills-grid">


                        {skills.length === 0 ? (

                            <p>
                                No skills available.
                            </p>

                        ) : (

                            skills.map((skill) => (

                                <label
                                    key={skill.skill_id}
                                    className={
                                        selectedSkillIds.includes(
                                            skill.skill_id
                                        )
                                            ? "eventcrew-required-skill-option selected"
                                            : "eventcrew-required-skill-option"
                                    }
                                >

                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedSkillIds.includes(
                                                skill.skill_id
                                            )
                                        }
                                        onChange={() =>
                                            props.onSkillChange(
                                                skill.skill_id
                                            )
                                        }
                                    />


                                    <span className="eventcrew-required-skill-check">
                                        ✓
                                    </span>


                                    <span>
                                        {skill.skill_name}
                                    </span>

                                </label>

                            ))

                        )}


                    </div>

                </div>


                <div className="eventcrew-form-group">

                    <label>
                        Additional requirements
                    </label>

                    <textarea
                        name="additional_requirements"
                        value={formData.additional_requirements}
                        onChange={props.onChange}
                    />

                </div>


            </div>


            {/* Publishing */}

            <div className="eventcrew-form-section">

                <h2>
                    Publishing
                </h2>


                <div className="eventcrew-form-group">

                    <label>
                        Listing status
                    </label>

                    <select
                        name="listing_status"
                        value={formData.listing_status}
                        onChange={props.onChange}
                        required
                    >

                        <option value="draft">
                            Draft
                        </option>

                        <option value="open">
                            Open
                        </option>

                        <option value="completed">
                            Completed
                        </option>

                        <option value="cancelled">
                            Cancelled
                        </option>

                    </select>

                </div>


            </div>


            <button
                type="submit"
                className="eventcrew-form-submit"
            >
                {props.submitText || "Save"}
            </button>


        </form>

    );

}


export default OpportunityForm;