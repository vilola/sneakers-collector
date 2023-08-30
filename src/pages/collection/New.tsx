import { Aside, Button, SneakersForm } from "../../components";

const New = () => {
  return (
    <Aside backTo="/collection" title="Add sneakers to your collection">
      <SneakersForm type="new">
        <Button className="w-100 mt-48" type="submit">
          Add new sneakers
        </Button>
      </SneakersForm>
    </Aside>
  );
};

export default New;
