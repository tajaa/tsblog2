import type { Category } from "@prisma/client";

export type CategorySelectorProps = {
  categories: Category[];
};

type CategorySelectorPropsWithState = CategorySelectorProps & {
  selectCategory: (id: number | null) => void;
  selectedCategoryId: number | null;
};

export const CategorySelector = (props: CategorySelectorProps) => {
  const bgClasses = ["bg-slate-400", "bg-slate-600", "bg-slate-800"];
  return (
    <div className="flex flex-wrap justify-center my-4">
      {props.categories.map((category, index) => (
        <button
          key={category.id}
          onClick={() => props.selectCategory(category.id)}
          className={`inline-block font-mono rounded-full px-4 py-2 text-sm text-white mr-4 mb-4 ${
            bgClasses[index]
          } ${props.selectedCategoryId === category.id ? "neo-shadow" : ""}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
