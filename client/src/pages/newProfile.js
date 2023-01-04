import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



const newProfile = () =>  {
return (
<Form classNaame="form-floating form-group-row">
  <div className="col-md">
    <label for="Availability">Availability</label>
    <div className="form-group">
      <select className="form-control" id="selectAvailability">
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>
    </div>
</Form>

<Form>
  <div className="form-group row">
    <div className="col-md">Skills</div>
    <div className="col-sm">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          FrontEnd (HTML/CSS/JS/React)
        </label>
      </div>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Backend(Node, Express)
        </label>
      </div>
    </div>
      <div className="form-group-row">
      <div className="form-check col-sm">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          Databases (Mongo, MySQL, Apollo)
        </label>
      </div>
      <div className="form-check col-sm">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" for="gridCheck1">
          InfraStructure (GitHub, Heroku)
        </label>
      </div>
    </div>
  </div>
  </Form>

  <Form className="form-floating form-group-row">
    <div className="col-md">
      <label for="Experience">Experience</label>
      <div className="form-group">
        <select className="form-control" id="selectExperience">
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </div>
  </Form>

  <div className="form-floating form-group-row">
    <label for="changePassword">Change Password</label>
    <input type="text" class="form-control" id="changePassword" placeholder="newt password"/>
  </div>

  <div className="form-floating form-group-row">
    <label for="confirmPassword">Confirm  Password</label>
    <input type="text" className="form-control" id="confirmPassword" placeholder="confirm password"/>
  </div>

<div className="form-group row">
  <div className="col-sm-10">
    <Button type="submit">Save</Button>
  </div>
</div>


);

}
export default newProfile;
