import GenresImages from './genresImages';
import { getCategories } from '../../api/categories/get';
import { CategoryBase } from '../../types/category';
import CustomHead from '../../components/customHead';

type Props = {
  categories?: Array<CategoryBase>;
  error?: any;
};

const AllGenres = ({ categories, error }: Props) => (
  <>
    <CustomHead title="All Genres" />
    <h2 className="primary-color">All Genres</h2>
    <div className="genres-gallery">
      {!error &&
        categories?.map((category) => (
          <div key={category.categoryId} className="genres-item">
            <div className="genre-container">
              <a className="card-click">
                <h3 className="primary-color">{category.name}</h3>
                {GenresImages[category.name] ? (
                  <img
                    src={`${GenresImages[category.name]}`}
                    width="600"
                    height="300"
                    alt={`genre-${category.categoryId}`}
                  />
                ) : (
                  <img
                    src="https://picsum.photos/600/300"
                    alt="Not found"
                  />
                )}
              </a>
            </div>
          </div>
        ))}
    </div>
  </>
);

export const getServerSideProps = async () => {
  try {
    const data = await getCategories();
    return {
      props: {
        categories: data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};

export default AllGenres;
