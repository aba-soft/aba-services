import { entityTypes } from "../types";

export function buildMakeFormStructure(args: entityTypes.IBuildFormStructure) {
  const { uuid } = args;
  return function makeFormStructure(
    formStructure: entityTypes.IFormStructure
  ): Readonly<entityTypes.IMadeFormStructure> {
    const {
      id = uuid(),
      createdAt = new Date(),
      modifiedAt = new Date(),
    } = formStructure;
    let { fields, title, description, softDeleted } = formStructure;

    // * Setters
    function setDescription(newDescription: string | undefined) {
      description = newDescription;
      modifiedAt.setTime(Date.now());
    }
    function setTitle(newTitle: string) {
      title = newTitle;
      modifiedAt.setTime(Date.now());
    }
    function setFields(newFields: entityTypes.tFields) {
      fields = newFields;
      modifiedAt.setTime(Date.now());
    }
    function remove() {
      softDeleted = true;
      modifiedAt.setTime(Date.now());
    }
    function restore() {
      softDeleted = false;
      modifiedAt.setTime(Date.now());
    }
    const makeFormStructure: Readonly<entityTypes.IMadeFormStructure> = {
      get: {
        id: () => id,
        title: () => title,
        description: () => description,
        fields: () => fields,
        createdAt: () => createdAt,
        modifiedAt: () => modifiedAt,
        softDeleted: () => softDeleted,
      },
      set: {
        description: setDescription,
        title: setTitle,
        fields: setFields,
        remove,
        restore,
      },
      object: () => {
        return {
          id,
          title,
          description,
          fields,
          createdAt,
          modifiedAt,
          softDeleted,
        };
      },
    };
    return makeFormStructure;
  };
}
