/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Employee, Project } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import Desktop1 from "./Desktop1";
import { Collection } from "@aws-amplify/ui-react";
export default function ProjectsCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const projectItems = useDataStoreBinding({
    type: "collection",
    model: Project,
  }).items;
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Employee,
  }).items.map((item) => ({
    ...item,
    EmployeeToProjects: projectItems.filter(
      (model) => model.employee === item.id
    ),
  }));
  const items = itemsProp !== undefined ? itemsProp : itemsDataStore;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "ProjectsCollection")}
    >
      {(item, index) => (
        <Desktop1
          post={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Desktop1>
      )}
    </Collection>
  );
}
