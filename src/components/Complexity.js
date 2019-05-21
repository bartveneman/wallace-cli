const React = require('react')
const importJsx = require('import-jsx')
const {Table, Th, RowSpan, Caption, Tr} = importJsx('./Table')
const {Red, Yellow, Dim} = importJsx('./Colors')
const {FormatInteger, FormatDecimal, FormatPercentage} = require('./Formatters')

const Complexity = ({stats}) => (
	<Table>
		<Caption>Complexity</Caption>

		<Tr>
			<React.Fragment />
			<Th>Total</Th>
			<Th>Average</Th>
			<Th>Maximum</Th>
		</Tr>

		<Tr>
			<RowSpan>Rules</RowSpan>
			<FormatInteger value={stats['rules.total']} />
		</Tr>

		<Tr>
			<RowSpan>Selectors</RowSpan>
			<FormatInteger value={stats['selectors.total']} />
			<Yellow>
				<FormatDecimal value={stats['rules.selectors.average']} />
			</Yellow>
			<Red>
				<FormatInteger value={stats['rules.selectors.maximum.count']} />
			</Red>
		</Tr>

		<Tr>
			<RowSpan>Identifiers</RowSpan>
			<FormatInteger
				value={
					stats['selectors.identifiers.average'] * stats['selectors.total']
				}
			/>
			<Yellow>
				<FormatDecimal value={stats['selectors.identifiers.average']} />
			</Yellow>
			<Red>
				<FormatInteger value={stats['selectors.identifiers.max.count']} />
			</Red>
		</Tr>

		<Tr>
			<RowSpan>Declarations</RowSpan>
			<FormatInteger value={stats['declarations.total']} />
			<Yellow>
				<FormatDecimal value={stats['stylesheets.cohesion.average']} />
			</Yellow>
			<Red>
				<FormatInteger value={stats['stylesheets.cohesion.min.count']} />
			</Red>
		</Tr>

		<Tr marginTop={1}>
			<React.Fragment />
			<Th>Total</Th>
			<Th>Unique</Th>
			<Th>Unique %</Th>
		</Tr>

		<Tr>
			<RowSpan>Browser hacks</RowSpan>
			<FormatInteger value={stats['stylesheets.browserhacks.total']} />
			<Yellow>
				<FormatInteger value={stats['stylesheets.browserhacks.totalUnique']} />
			</Yellow>
			<Dim>
				<FormatPercentage
					fraction={
						stats['stylesheets.browserhacks.totalUnique'] /
						stats['stylesheets.browserhacks.total']
					}
				/>
			</Dim>
		</Tr>

		<Tr>
			<RowSpan>@supports</RowSpan>
			<FormatInteger value={stats['atrules.supports.total']} />
			<Yellow>
				<FormatInteger value={stats['atrules.supports.totalUnique']} />
			</Yellow>
			<Dim>
				<FormatPercentage
					fraction={
						stats['atrules.supports.totalUnique'] /
						stats['atrules.supports.total']
					}
				/>
			</Dim>
		</Tr>

		<Tr>
			<RowSpan>@media</RowSpan>
			<FormatInteger value={stats['atrules.mediaqueries.total']} />
			<Yellow>
				<FormatInteger value={stats['atrules.mediaqueries.totalUnique']} />
			</Yellow>
			<Dim>
				<FormatPercentage
					fraction={
						stats['atrules.mediaqueries.totalUnique'] /
						stats['atrules.mediaqueries.total']
					}
				/>
			</Dim>
		</Tr>

		<Tr>
			<RowSpan>Z-indexes</RowSpan>
			<FormatInteger value={stats['values.zindexes.total']} />
			<Yellow>
				<FormatInteger value={stats['values.zindexes.totalUnique']} />
			</Yellow>
			<Dim>
				<FormatPercentage
					fraction={
						stats['values.zindexes.totalUnique'] /
						stats['values.zindexes.total']
					}
				/>
			</Dim>
		</Tr>
	</Table>
)

module.exports = Complexity