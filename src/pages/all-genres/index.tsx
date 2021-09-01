import GenresImages from './genresImages';
import { getCategories } from '../../api/categories/get';
import { CategoryBase } from '../../types/movies';

type Props = {
  categories?: Array<CategoryBase>;
  error?: any;
};

const AllGenres = ({ categories, error }: Props) => (
  <>
    <h2 className="primary-color">All Genres</h2>
    <div className="genres-gallery">
      {!error &&
        categories?.map((category) => (
          <div className="genres-item">
            <div className="genre-container">
              <a className="card-click" href="#">
                <h3 className="primary-color">{category.name}</h3>
                {GenresImages[category.name] ? (
                  <img
                    src={`${GenresImages[category.name]}`}
                    width="600"
                    height="300"
                    alt={`genre-image${category.categoryId}`}
                  />
                ) : (
                  <img
                    src="https://picsum.photos/600/300"
                    alt="Not found image"
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
